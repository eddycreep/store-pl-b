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
let BasketListener = class BasketListener {
    constructor(basketService, eventEmitter) {
        this.basketService = basketService;
        this.eventEmitter = eventEmitter;
    }
    async handleBasketSaved(eventData) {
        console.log('[EVENT TRIGGERED] Fetching product prices for:', eventData.product);
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
};
exports.BasketListener = BasketListener;
__decorate([
    (0, event_emitter_1.OnEvent)('basket.saved'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasketListener.prototype, "handleBasketSaved", null);
exports.BasketListener = BasketListener = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [basket_service_1.BasketService,
        event_emitter_1.EventEmitter2])
], BasketListener);
//# sourceMappingURL=basket.listener.js.map