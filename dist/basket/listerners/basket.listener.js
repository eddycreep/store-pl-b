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
exports.BasketListener = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const basket_service_1 = require("../basket.service");
const date_fns_1 = require("date-fns");
let clientLy_basket_id = 0;
let clientLy_customer_id = 0;
let clientLy_basket_quantity = 0;
let BasketListener = class BasketListener {
    constructor(basketService, eventEmitter) {
        this.basketService = basketService;
        this.eventEmitter = eventEmitter;
    }
    async handleBasketSaved(eventData) {
        const { product, basket_id, customer_id, quantity } = eventData;
        console.log('[EVENT TRIGGERED] - Fetching product prices for: ', product);
        console.log('CLIENT DATA - CLIENT DATA - CLIENT DATA: ', {
            basket_id,
            customer_id,
            quantity
        });
        clientLy_basket_id = eventData.basket_id;
        clientLy_customer_id = eventData.customer_id;
        clientLy_basket_quantity = eventData.quantity;
        try {
            const productPrices = await this.basketService.fetchProductPrices(eventData.product);
            const returnedDescriptions = productPrices.map(p => p.description);
            const notFoundItems = eventData.product.filter(product => !returnedDescriptions.includes(product));
            if (notFoundItems.length > 0) {
                console.warn('[WARNING] The price for the following items was not found:', notFoundItems.join(', '));
            }
            console.log('[SUCCESS] Fetched product prices:', productPrices);
        }
        catch (error) {
            console.error('[ERROR] Failed to fetch product prices:', error.message);
        }
    }
    async handleBasketItemsSave(eventData) {
        console.log('IETMS EVENT TRIGGERED, Saving basket items for:', eventData.productPrices);
        const { productPrices } = eventData;
        const insertionTime = (0, date_fns_1.format)(new Date(), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");
        try {
            const basketItems = productPrices.map(({ selling_incl_1, description }) => ({
                price: selling_incl_1,
                description,
            }));
            const individualQuantity = Math.floor(clientLy_basket_quantity / productPrices.length);
            await Promise.all(basketItems.map((item) => this.basketService.saveCustomerBasketItems({
                basket_id: clientLy_basket_id,
                customer_id: clientLy_customer_id,
                product: basketItems.map((item) => item.description),
                quantity: individualQuantity,
                product_price: item.price,
                insertion_time: insertionTime,
            })));
            console.log('EVENT SUCCESS, Basket items saved successfully.');
        }
        catch (error) {
            console.error('EVENT ERROR, Error saving basket items:', error.message);
        }
    }
    async handleCheckCustomerLoyalty() {
        console.log('Checking loyalty for customer with ID: ', clientLy_customer_id);
        try {
            const loyaltyStatus = await this.basketService.checkLoyaltyCustomer(clientLy_customer_id.toString());
            console.log('Loyalty status:', loyaltyStatus);
        }
        catch (error) {
            console.error('EVENT ERROR, Error determining whether customer is on the loyalty program: ', error.message);
        }
    }
};
exports.BasketListener = BasketListener;
__decorate([
    (0, event_emitter_1.OnEvent)('basket.saved'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasketListener.prototype, "handleBasketSaved", null);
__decorate([
    (0, event_emitter_1.OnEvent)('basket.items.save'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasketListener.prototype, "handleBasketItemsSave", null);
__decorate([
    (0, event_emitter_1.OnEvent)('check.loyalty'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BasketListener.prototype, "handleCheckCustomerLoyalty", null);
exports.BasketListener = BasketListener = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [basket_service_1.BasketService,
        event_emitter_1.EventEmitter2])
], BasketListener);
//# sourceMappingURL=basket.listener.js.map