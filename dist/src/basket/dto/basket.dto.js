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
exports.FinalTransactionDto = exports.CombinedProductSpecialsDto = exports.ProductSpecialsDto = exports.LoyaltyCustomersDto = exports.UpdateBasketItemsDto = exports.SaveBasketItemsDto = exports.ProductDto = exports.CustomerBasketDto = void 0;
const class_validator_1 = require("class-validator");
class CustomerBasketDto {
}
exports.CustomerBasketDto = CustomerBasketDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CustomerBasketDto.prototype, "basket_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CustomerBasketDto.prototype, "customer_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], CustomerBasketDto.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CustomerBasketDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerBasketDto.prototype, "purchase_date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CustomerBasketDto.prototype, "total_amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerBasketDto.prototype, "payment_method", void 0);
class ProductDto {
}
exports.ProductDto = ProductDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "selling_incl_1", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "special_price_incl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductDto.prototype, "description", void 0);
class SaveBasketItemsDto {
}
exports.SaveBasketItemsDto = SaveBasketItemsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveBasketItemsDto.prototype, "basket_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveBasketItemsDto.prototype, "customer_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SaveBasketItemsDto.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveBasketItemsDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveBasketItemsDto.prototype, "insertion_time", void 0);
class UpdateBasketItemsDto {
}
exports.UpdateBasketItemsDto = UpdateBasketItemsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBasketItemsDto.prototype, "basket_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBasketItemsDto.prototype, "product_price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBasketItemsDto.prototype, "discount_applied", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBasketItemsDto.prototype, "final_price", void 0);
class LoyaltyCustomersDto {
}
exports.LoyaltyCustomersDto = LoyaltyCustomersDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoyaltyCustomersDto.prototype, "CustomerID", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "LoyaltyTier", void 0);
class ProductSpecialsDto {
}
exports.ProductSpecialsDto = ProductSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "special_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductSpecialsDto.prototype, "special_price", void 0);
class CombinedProductSpecialsDto {
}
exports.CombinedProductSpecialsDto = CombinedProductSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CombinedProductSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "special_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CombinedProductSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CombinedProductSpecialsDto.prototype, "special_group_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CombinedProductSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CombinedProductSpecialsDto.prototype, "special_price", void 0);
class FinalTransactionDto {
}
exports.FinalTransactionDto = FinalTransactionDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FinalTransactionDto.prototype, "basket_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FinalTransactionDto.prototype, "customer_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], FinalTransactionDto.prototype, "purchased_product", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FinalTransactionDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FinalTransactionDto.prototype, "product_amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FinalTransactionDto.prototype, "product_discounted_amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FinalTransactionDto.prototype, "total_basket_amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FinalTransactionDto.prototype, "total_disc_basket_amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FinalTransactionDto.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FinalTransactionDto.prototype, "purchase_date", void 0);
//# sourceMappingURL=basket.dto.js.map