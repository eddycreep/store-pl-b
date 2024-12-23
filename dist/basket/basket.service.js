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
const date_fns_1 = require("date-fns");
let client_basket_id = 0;
let client_customer_id = 0;
let client_card_number = '';
let client_product = [];
let client_purchase_date = '';
let client_basket_total_amount = 0;
let client_payment_method = '';
let clients_purchasedItem_prices = [];
let BasketService = class BasketService {
    constructor(databaseService, eventEmitter) {
        this.databaseService = databaseService;
        this.eventEmitter = eventEmitter;
    }
    async saveCustomerBasket(CustomerBasketDto) {
        const { basket_id, customer_id, card_number, product, purchase_date, total_amount, payment_method, } = CustomerBasketDto;
        const formattedPurchaseDate = (0, date_fns_1.format)(new Date(purchase_date), "yyyy-MM-dd HH:mm:ss");
        const query = `INSERT INTO loyalty_program.tblbasketinfo(basket_id, customer_id, card_number, purchase_date, total_amount, payment_method) 
                   VALUES (?, ?, ?, ?, ?, ?)`;
        try {
            await this.databaseService.query(query, [
                basket_id,
                customer_id,
                card_number,
                formattedPurchaseDate,
                total_amount,
                payment_method,
            ]);
            console.log('saveCustomerBasket METHOD saved for basket_id: ', basket_id);
            this.eventEmitter.emit('basket.saved', { product });
            return { message: 'Basket successfully saved.' };
        }
        catch (error) {
            throw new common_1.BadRequestException('Error saving customer basket: ' + error.message);
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
            clients_purchasedItem_prices = productPrices.flat();
            return productPrices.flat();
        }
        catch (error) {
            throw new common_1.BadRequestException('Error fetching product prices: ' + error.message);
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