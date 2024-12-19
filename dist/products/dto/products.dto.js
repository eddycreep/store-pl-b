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
exports.LoyaltyCustomersDto = exports.StoresDto = exports.UpcomingSurveysDto = exports.ActiveSurveysDto = exports.UpcomingRewardsDto = exports.ActiveRewardsDto = exports.UpcomingSpecialsDto = exports.AllSpecialsDto = exports.AllCombinedSpecialsDto = exports.AllProductSpecialsDto = exports.UpcomingCombinedSpecialsDto = exports.ActiveCombinedSpecialsDto = exports.UpcomingProductSpecialsDto = exports.ActiveProductSpecialsDto = exports.ProductstDto = void 0;
const class_validator_1 = require("class-validator");
class ProductstDto {
}
exports.ProductstDto = ProductstDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductstDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductstDto.prototype, "item_code", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductstDto.prototype, "selling_incl_1", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductstDto.prototype, "special_price_incl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductstDto.prototype, "description_1", void 0);
class ActiveProductSpecialsDto {
}
exports.ActiveProductSpecialsDto = ActiveProductSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveProductSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveProductSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveProductSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveProductSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveProductSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveProductSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveProductSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveProductSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveProductSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveProductSpecialsDto.prototype, "special_price", void 0);
class UpcomingProductSpecialsDto {
}
exports.UpcomingProductSpecialsDto = UpcomingProductSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingProductSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingProductSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingProductSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingProductSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingProductSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingProductSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingProductSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingProductSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingProductSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingProductSpecialsDto.prototype, "special_price", void 0);
class ActiveCombinedSpecialsDto {
}
exports.ActiveCombinedSpecialsDto = ActiveCombinedSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveCombinedSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveCombinedSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveCombinedSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveCombinedSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveCombinedSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveCombinedSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveCombinedSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveCombinedSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveCombinedSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveCombinedSpecialsDto.prototype, "special_price", void 0);
class UpcomingCombinedSpecialsDto {
}
exports.UpcomingCombinedSpecialsDto = UpcomingCombinedSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingCombinedSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingCombinedSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingCombinedSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingCombinedSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingCombinedSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingCombinedSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingCombinedSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingCombinedSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingCombinedSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingCombinedSpecialsDto.prototype, "special_price", void 0);
class AllProductSpecialsDto {
}
exports.AllProductSpecialsDto = AllProductSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllProductSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllProductSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllProductSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllProductSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllProductSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllProductSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllProductSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllProductSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllProductSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllProductSpecialsDto.prototype, "special_price", void 0);
class AllCombinedSpecialsDto {
}
exports.AllCombinedSpecialsDto = AllCombinedSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllCombinedSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "special_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllCombinedSpecialsDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllCombinedSpecialsDto.prototype, "special_group_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllCombinedSpecialsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllCombinedSpecialsDto.prototype, "special_price", void 0);
class AllSpecialsDto {
}
exports.AllSpecialsDto = AllSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllSpecialsDto.prototype, "special_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllSpecialsDto.prototype, "isActive", void 0);
class UpcomingSpecialsDto {
}
exports.UpcomingSpecialsDto = UpcomingSpecialsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingSpecialsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSpecialsDto.prototype, "special_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSpecialsDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSpecialsDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSpecialsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSpecialsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSpecialsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSpecialsDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingSpecialsDto.prototype, "isActive", void 0);
class ActiveRewardsDto {
}
exports.ActiveRewardsDto = ActiveRewardsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveRewardsDto.prototype, "reward_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "reward_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "reward", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "reward_type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveRewardsDto.prototype, "reward_price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveRewardsDto.prototype, "age_group", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveRewardsDto.prototype, "isActive", void 0);
class UpcomingRewardsDto {
}
exports.UpcomingRewardsDto = UpcomingRewardsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingRewardsDto.prototype, "reward_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "reward_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "reward", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "reward_type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingRewardsDto.prototype, "reward_price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingRewardsDto.prototype, "age_group", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingRewardsDto.prototype, "isActive", void 0);
class ActiveSurveysDto {
}
exports.ActiveSurveysDto = ActiveSurveysDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveSurveysDto.prototype, "survey_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveSurveysDto.prototype, "survey_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveSurveysDto.prototype, "survey_category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveSurveysDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveSurveysDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveSurveysDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveSurveysDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActiveSurveysDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ActiveSurveysDto.prototype, "isActive", void 0);
class UpcomingSurveysDto {
}
exports.UpcomingSurveysDto = UpcomingSurveysDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingSurveysDto.prototype, "survey_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSurveysDto.prototype, "survey_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSurveysDto.prototype, "survey_category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSurveysDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSurveysDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSurveysDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSurveysDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpcomingSurveysDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpcomingSurveysDto.prototype, "isActive", void 0);
class StoresDto {
}
exports.StoresDto = StoresDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StoresDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "address_1", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "address_2", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "address_3", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "address_4", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "address_5", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoresDto.prototype, "address_6", void 0);
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
], LoyaltyCustomersDto.prototype, "FirstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "LastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "MobileNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], LoyaltyCustomersDto.prototype, "Age", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "Gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "Birthday", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "Ethnicity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "EmploymentStatus", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoyaltyCustomersDto.prototype, "LoyaltyTier", void 0);
//# sourceMappingURL=products.dto.js.map