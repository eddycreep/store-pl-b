"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const database_service_1 = require("../database/database.service");
const basket_dto_1 = require("./dto/basket.dto");
const common_2 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
let BasketService = class BasketService {
    constructor(databaseService, eventEmitter) {
        this.databaseService = databaseService;
        this.eventEmitter = eventEmitter;
    }
    async saveCustomerBasket(CustomerBasketDto) {
        const { basket_id, customer_id, card_number, product, quantity, purchase_date, total_amount, payment_method } = CustomerBasketDto;
        const formattedPurchaseDate = (0, date_fns_1.format)(new Date(purchase_date), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");
        const query = `INSERT INTO loyalty_program.tblbasketinfo(basket_id, customer_id, card_number, purchase_date, total_amount, payment_method)VALUES (?, ?, ?, ?, ?, ?)`;
        try {
            await this.databaseService.query(query, [basket_id, customer_id, card_number, formattedPurchaseDate, total_amount, payment_method]);
            this.eventEmitter.emit('save-basket-items', CustomerBasketDto);
            return this.databaseService.query(query, [basket_id, customer_id, card_number, formattedPurchaseDate, total_amount, payment_method]);
        }
        catch (error) {
            throw new common_2.BadRequestException('Error saving customer basket: ' + error.message);
        }
    }
    async saveCustomerBasketItems(saveBasketItemsDto) {
        const { basket_id, customer_id, product, quantity } = saveBasketItemsDto;
        const query = `INSERT INTO loyalty_program.tblbasketinfo_items(basket_id, customer_id, product, quantity, insertion_time)VALUES(?, ?, ?, ?, ?)`;
        const insertionTime = (0, date_fns_1.format)(new Date(), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");
        try {
            return Promise.all(product.map((productName) => {
                const itemDto = new basket_dto_1.SaveBasketItemsDto();
                itemDto.basket_id = basket_id;
                itemDto.customer_id = customer_id;
                itemDto.product = [productName];
                itemDto.quantity = quantity;
                itemDto.insertion_time = insertionTime;
                return this.databaseService.query(query, [
                    itemDto.basket_id,
                    itemDto.customer_id,
                    productName,
                    itemDto.quantity,
                    itemDto.insertion_time,
                ]);
            }));
        }
        catch (error) {
            throw new common_2.BadRequestException('Error saving basket items: ' + error.message);
        }
    }
    async checkLoyaltyCustomer(customerId) {
        const query = `SELECT CustomerID, LoyaltyTier FROM loyalty_program.tblloyaltycustomers WHERE CustomerID = ?`;
        try {
            const results = await this.databaseService.query(query, [customerId]);
            if (results.length === 0) {
                throw new common_2.NotFoundException('Customer not found');
            }
            return results;
        }
        catch (error) {
            throw new common_2.BadRequestException('Error checking loyalty customer: ' + error.message);
        }
    }
    async checkProductSpecials(products) {
        const query = `SELECT 
                    sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id,
                    sp.start_date, sp.expiry_date, sp.special_value, sp.isActive,
                    spi.product_description, spi.special_price
                    FROM loyalty_program.tblspecials sp
                    JOIN loyalty_program.tblspecialitems spi
                    ON sp.special_id = spi.special_id
                    WHERE sp.special_type = 'Special' 
                    AND sp.isActive = 1 
                    AND spi.product_description IN (?) 
                    AND sp.start_date <= CURDATE() 
                    AND sp.expiry_date >= CURDATE()`;
        try {
            const specials = await Promise.all(products.map(async (product) => {
                const results = await this.databaseService.query(query, [product]);
                return results;
            }));
            return specials.flat();
        }
        catch (error) {
            throw new common_2.BadRequestException('Error fetching product specials: ' + error.message);
        }
    }
    async checkCombinedProductSpecials(products) {
        const query = `SELECT 
                      sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id,
                      sp.start_date, sp.expiry_date, sp.special_value, sp.isActive,
                      spcg.special_group_id, spcg.product_description, spcg.special_price
                  FROM 
                      loyalty_program.tblspecials sp
                  JOIN 
                      loyalty_program.tblspecials_combinedgroup spcg 
                  ON 
                      sp.special_id = spcg.special_id
                  WHERE 
                      sp.special_type = 'Combined Special' 
                      AND sp.isActive = 1 
                      AND spcg.product_description IN (?) 
                      AND sp.start_date <= CURDATE() 
                      AND sp.expiry_date >= CURDATE()`;
        try {
            const combinedSpecials = await Promise.all(products.map(async (product) => {
                const results = await this.databaseService.query(query, [product]);
                return results;
            }));
            return combinedSpecials.flat();
        }
        catch (error) {
            throw new common_2.BadRequestException('Error fetching product specials: ' + error.message);
        }
    }
    async fetchProductPrices(products) {
        const query = `SELECT mstn.id, mstn.selling_incl_1, mstn.special_price_incl, COALESCE(inv.description_1, inv.description_2) AS description FROM loyalty_program.tblmultistoretrn mstn 
    JOIN loyalty_program.tblinventory inv ON mstn.item_code = inv.item_code WHERE COALESCE(inv.description_1, inv.description_2) IN (?)`;
        try {
            const productPrices = await Promise.all(products.map(async (product) => {
                const results = await this.databaseService.query(query, [product]);
                return results;
            }));
            return productPrices.flat();
        }
        catch (error) {
            throw new common_2.BadRequestException('Error fetching product prices: ' + error.message);
        }
    }
    async saveFinalTransaction(finalTransactionDto) {
        const { basket_id, customer_id, purchased_product, quantity, product_amount, product_discounted_amount, total_basket_amount, total_disc_basket_amount, payment_method, purchase_date } = finalTransactionDto;
        const formattedPurchaseDate = (0, date_fns_1.format)(new Date(purchase_date), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");
        const query = `INSERT INTO loyalty_program.tblcompletetransaction (basket_id, customer_id, purchased_product, quantity, product_amount, product_discounted_amount, total_basket_amount, total_disc_basket_amount, payment_method, purchase_date)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        try {
            return Promise.all(purchased_product.map((productName) => {
                return this.databaseService.query(query, [
                    basket_id,
                    customer_id,
                    productName,
                    quantity,
                    product_amount,
                    product_discounted_amount,
                    total_basket_amount,
                    total_disc_basket_amount,
                    payment_method,
                    formattedPurchaseDate,
                ]);
            }));
        }
        catch (error) {
            throw new common_2.BadRequestException('Error saving customers final transaction: ' + error.message);
        }
    }
};
exports.BasketService = BasketService;
exports.BasketService = BasketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        event_emitter_1.EventEmitter2])
], BasketService);
//# sourceMappingURL=basket.service.js.map