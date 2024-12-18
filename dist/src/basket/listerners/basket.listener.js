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
const basket_dto_1 = require("../dto/basket.dto");
const date_fns_1 = require("date-fns");
let BasketListener = class BasketListener {
    constructor(basketService, eventEmitter) {
        this.basketService = basketService;
        this.eventEmitter = eventEmitter;
    }
    onModuleInit() {
        this.eventEmitter.on('save-basket-items', (data) => {
            this.handleBasketSaved(data);
        });
    }
    async handleBasketSaved(CustomerBasketDto) {
        console.log('Executing save-basket-items method...');
        const { basket_id, customer_id, product, quantity } = CustomerBasketDto;
        const insertionTime = (0, date_fns_1.format)(new Date(), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");
        const SaveBasketItemsDto = {
            basket_id: basket_id,
            customer_id: customer_id,
            product: product.map((item) => item),
            quantity: quantity,
            insertion_time: insertionTime,
        };
        await this.basketService.saveCustomerBasketItems(SaveBasketItemsDto);
    }
};
exports.BasketListener = BasketListener;
__decorate([
    (0, event_emitter_1.OnEvent)('save-basket-items'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [basket_dto_1.CustomerBasketDto]),
    __metadata("design:returntype", Promise)
], BasketListener.prototype, "handleBasketSaved", null);
exports.BasketListener = BasketListener = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [basket_service_1.BasketService, event_emitter_1.EventEmitter2])
], BasketListener);
//# sourceMappingURL=basket.listener.js.map