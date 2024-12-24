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
const basket_service_1 = require("./basket.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const basket_dto_1 = require("./dto/basket.dto");
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
            const productPrices = await this.basketService.fetchProductPrices(products);
            const productsWithPrices = productPrices.map(product => product.description);
            const productsWithoutPrices = products.filter(product => !productsWithPrices.includes(product));
            let message;
            if (productsWithPrices.length === 1) {
                message = `Prices returned for '${productsWithPrices[0]}'`;
            }
            else if (productsWithPrices.length > 1) {
                message = `Prices returned for '${productsWithPrices.join(', ')}', No prices were found for '${productsWithoutPrices.join(', ')}'`;
            }
            else {
                message = 'No prices were found for the requested items.';
            }
            return {
                message,
                productPrices
            };
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
    async checkLoyaltyCustomer(customerId) {
        try {
            const loyaltyData = await this.basketService.checkLoyaltyCustomer(customerId);
            const message = loyaltyData.length > 0
                ? "The customer has signed up for loyalty program"
                : "The customer has NOT signed up for loyalty program";
            return {
                message,
                loyaltyData
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async checkProductSpecials(productDescription) {
        try {
            const products = productDescription.split(',').map(item => item.trim());
            const normal_specials = await this.basketService.checkProductSpecials(products);
            const productsWithSpecials = normal_specials.map(special => special.product_description);
            let message;
            if (productsWithSpecials.length === 1) {
                message = `Normal Specials found for the item '${productsWithSpecials[0]}'`;
            }
            else if (productsWithSpecials.length > 1) {
                const productWithoutSpecials = products.filter(product => !productsWithSpecials.includes(product));
                message = `Normal Specials found for the item(s) '${productsWithSpecials.join(', ')}', No specials were found for the item(s) '${productWithoutSpecials.join(', ')}'`;
            }
            else {
                message = 'No Normal Specials were found for the purchased item(s).';
            }
            return {
                message,
                normal_specials
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async checkCombinedSpecials(productDescription) {
        try {
            const products = productDescription.split(',').map(item => item.trim());
            const combined_specials = await this.basketService.checkCombinedSpecials(products);
            const productsWithSpecials = combined_specials.map(special => special.product_description);
            let message;
            if (productsWithSpecials.length === 1) {
                const productWithoutSpecials = products.filter(product => !productsWithSpecials.includes(product));
                message = `The item '${productsWithSpecials[0]}' is linked to a combined special but no specials were found for the items '${productWithoutSpecials.join(', ')}'`;
            }
            else if (productsWithSpecials.length > 1) {
                const productWithoutSpecials = products.filter(product => !productsWithSpecials.includes(product));
                message = `The items '${productsWithSpecials.join(', ')}' are linked to a combined special but no specials were found for the items '${productWithoutSpecials.join(', ')}'`;
            }
            else {
                message = 'No Combined Specials were found for the purchased item(s).';
            }
            return {
                message,
                combined_specials
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async updateBasketItemsDisc(basketItemsDiscDtos) {
        try {
            return await this.basketService.updateBasketItemsDisc(basketItemsDiscDtos);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async saveFinalTransaction(finalTransactionDto) {
        try {
            return await this.basketService.saveFinalTransaction(finalTransactionDto);
        }
        catch (error) {
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
                card_number: { type: 'string', example: 961219820491, description: 'Customers card number' },
                product: { type: 'array', example: [], description: 'List of the products' },
                quantity: { type: 'integer', example: 3, description: 'Quantity of the products purchased' },
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
__decorate([
    (0, common_1.Get)('checkloyalty/:CustomerID'),
    __param(0, (0, common_1.Param)('CustomerID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "checkLoyaltyCustomer", null);
__decorate([
    (0, common_1.Get)('check-product-specials/:product_description'),
    __param(0, (0, common_1.Param)('product_description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "checkProductSpecials", null);
__decorate([
    (0, common_1.Get)('check-combined-specials/:product_description'),
    __param(0, (0, common_1.Param)('product_description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "checkCombinedSpecials", null);
__decorate([
    (0, common_1.Patch)('update-basket-disc-prices'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "updateBasketItemsDisc", null);
__decorate([
    (0, common_1.Post)('save-final-transaction'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [basket_dto_1.FinalTransactionDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "saveFinalTransaction", null);
exports.BasketController = BasketController = __decorate([
    (0, swagger_1.ApiTags)('API'),
    (0, common_1.Controller)('basket'),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
//# sourceMappingURL=basket.controller.js.map