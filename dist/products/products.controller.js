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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProducts() {
        try {
            return await this.productsService.getProducts();
        }
        catch (error) {
            console.error('Error fetching products: ', error.message);
            throw new common_2.BadRequestException(error.message);
        }
    }
    async getActiveProductSpecials() {
        try {
            return await this.productsService.getActiveProductSpecials();
        }
        catch (error) {
            throw new common_2.BadRequestException(error.message);
        }
    }
    async getUpcomingProductSpecials() {
        try {
            return await this.productsService.getUpcomingProductSpecials();
        }
        catch (error) {
            throw new common_2.BadRequestException(error.message);
        }
    }
    async getActiveCombinedSpecials() {
        try {
            return await this.productsService.getActiveCombinedSpecials();
        }
        catch (error) {
            throw new common_2.BadRequestException(error.message);
        }
    }
    async getUpcomingCombinedSpecials() {
        try {
            return await this.productsService.getUpcomingCombinedSpecials();
        }
        catch (error) {
            throw new common_2.BadRequestException(error.message);
        }
    }
    async getAllProductSpecials() {
        return await this.productsService.getAllProductSpecials();
    }
    async getAllCombinedSpecials() {
        return await this.productsService.getAllCombinedSpecials();
    }
    async getAllActiveSpecials() {
        return await this.productsService.getAllActiveSpecials();
    }
    async getUpcomingSpecials() {
        return await this.productsService.getAllUpcomingSpecials();
    }
    async getActiveRewards() {
        return await this.productsService.getActiveRewards();
    }
    async getUpcomingRewards() {
        return await this.productsService.getUpcomingRewards();
    }
    async getActiveSurveys() {
        return await this.productsService.getActiveSurveys();
    }
    async getUpcomingSurveys() {
        return await this.productsService.getUpcomingSurveys();
    }
    async getStores() {
        return await this.productsService.getStores();
    }
    async getCustomers() {
        return await this.productsService.getCustomers();
    }
    async getLoyaltyCustomers() {
        return await this.productsService.getLoyaltyCustomers();
    }
    async getLoyaltyTiers() {
        return await this.productsService.getLoyaltyTiers();
    }
    async getAgeGroups() {
        return await this.productsService.getAgeGroups();
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('get-products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('get-active-product-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve active product specials' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getActiveProductSpecials", null);
__decorate([
    (0, common_1.Get)('get-upcoming-product-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve upcoming product specials' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUpcomingProductSpecials", null);
__decorate([
    (0, common_1.Get)('get-active-combined-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve active combined product specials' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getActiveCombinedSpecials", null);
__decorate([
    (0, common_1.Get)('get-upcoming-combined-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve upcoming combined product specials' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUpcomingCombinedSpecials", null);
__decorate([
    (0, common_1.Get)('get-all-product-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all product specials' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all product specials.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProductSpecials", null);
__decorate([
    (0, common_1.Get)('get-all-combined-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all combined specials' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all combined specials.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllCombinedSpecials", null);
__decorate([
    (0, common_1.Get)('get-all-active-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all active specials' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all active specials.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllActiveSpecials", null);
__decorate([
    (0, common_1.Get)('get-all-upcoming-specials'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all upcoming specials' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all upcoming specials.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUpcomingSpecials", null);
__decorate([
    (0, common_1.Get)('get-active-rewards'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve active rewards' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all active rewards.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getActiveRewards", null);
__decorate([
    (0, common_1.Get)('get-upcoming-rewards'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve upcoming rewards' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all upcoming rewards.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUpcomingRewards", null);
__decorate([
    (0, common_1.Get)('get-active-surveys'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve active surveys' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of active surveys.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getActiveSurveys", null);
__decorate([
    (0, common_1.Get)('get-upcoming-surveys'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve upcoming surveys' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of upcoming surveys.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUpcomingSurveys", null);
__decorate([
    (0, common_1.Get)('get-stores'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve stores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of stores.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getStores", null);
__decorate([
    (0, common_1.Get)('get-customers'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve customers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of customers.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getCustomers", null);
__decorate([
    (0, common_1.Get)('get-loyalty-customers'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve loyalty customers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of loyalty customers.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getLoyaltyCustomers", null);
__decorate([
    (0, common_1.Get)('get-loyalty-tiers'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve loyalty Tiers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Loyalty Tiers.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getLoyaltyTiers", null);
__decorate([
    (0, common_1.Get)('get-age-groups'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve Age Groups' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Age Groups in which Specials/Rewards can be applied to.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAgeGroups", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map