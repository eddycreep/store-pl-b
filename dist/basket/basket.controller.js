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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketController = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
const basket_dto_1 = require("./dto/basket.dto");
const swagger_1 = require("@nestjs/swagger");
let BasketController = class BasketController {
    constructor(basketService) {
        this.basketService = basketService;
    }
    async saveCustomerBasket(customerBasketDto) {
        return this.basketService.saveCustomerBasket(customerBasketDto);
    }
    async fetchProductPrices(productDescription) {
        try {
            const products = productDescription.split(',').map(item => item.trim());
            return await this.basketService.fetchProductPrices(products);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async saveCustomerBasketItems(saveBasketItemsDto) {
        console.log('Received SaveBasketItemsDto:', saveBasketItemsDto);
        try {
            return await this.basketService.saveCustomerBasketItems(saveBasketItemsDto);
        }
        catch (error) {
            console.error('Error in controller:', error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.BasketController = BasketController;
__decorate([
    (0, common_1.Post)('savecustomerbasket'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save basket information', description: 'Adds customer basket in the store loyalty system.' }),
    (0, swagger_1.ApiBody)({
        description: 'Customer Basket Data',
        schema: {
            type: 'object',
            properties: {
                basket_id: { type: 'integer', example: 101, description: 'ID of the basket' },
                customer_id: { type: 'integer', example: 202, description: 'ID of the customer' },
                product: { type: 'array', example: [], description: 'Name of the products' },
                quantity: { type: 'integer', example: 3, description: 'Quantity of the product purchased' },
                purchase_date: { type: 'string', example: '2023-10-14 13:25:00', description: 'Date of the purchased basket' },
                total_amount: { type: 'number', example: 45.99, description: 'Total basket amount' },
                payment_method: { type: 'string', example: 'Cash', description: 'Payment method of the basket' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Basket information successfully saved',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string', example: 'Success' },
                data: {
                    type: 'object',
                    properties: {
                        basket_id: { type: 'integer' },
                        customer_id: { type: 'integer' },
                        product: { type: 'array' },
                        quantity: { type: 'integer' },
                        purchase_date: { type: 'string' },
                        total_amount: { type: 'number' },
                        payment_method: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string', example: 'Failed' },
                error: { type: 'string', description: 'Error details' },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [basket_dto_1.CustomerBasketDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "saveCustomerBasket", null);
__decorate([
    (0, common_1.Get)('fetch-product-prices/:product_description'),
    __param(0, (0, common_1.Param)('product_description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "fetchProductPrices", null);
__decorate([
    (0, common_1.Post)('savecustomerbasketitems'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [basket_dto_1.SaveBasketItemsDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "saveCustomerBasketItems", null);
exports.BasketController = BasketController = __decorate([
    (0, swagger_1.ApiTags)('Basket'),
    (0, common_1.Controller)('basket'),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
//# sourceMappingURL=basket.controller.js.map