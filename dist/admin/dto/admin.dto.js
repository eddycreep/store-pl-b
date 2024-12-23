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
exports.UpdateSurveyQuestionsDto = exports.SaveSurveyQuestionsDto = exports.GetSurveyIdDto = exports.UpdateSurveyDto = exports.SaveSurveyDto = exports.GetSurveysDto = exports.UpdateRewardsDto = exports.SaveRewardsDto = exports.GetAllRewardsDto = exports.UpdateCombinedSpecialItemsDto = exports.UpdateSpecialItemsDto = exports.UpdateSpecialDto = exports.SaveCombinedSpecialItemsDto = exports.SaveSpecialItemsDto = exports.SaveSpecialDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class SaveSpecialDto {
}
exports.SaveSpecialDto = SaveSpecialDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialDto.prototype, "special_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialDto.prototype, "special", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialDto.prototype, "special_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialDto.prototype, "special_value", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveSpecialDto.prototype, "isActive", void 0);
class SaveSpecialItemsDto {
}
exports.SaveSpecialItemsDto = SaveSpecialItemsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveSpecialItemsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSpecialItemsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveSpecialItemsDto.prototype, "special_price", void 0);
class SaveCombinedSpecialItemsDto {
}
exports.SaveCombinedSpecialItemsDto = SaveCombinedSpecialItemsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveCombinedSpecialItemsDto.prototype, "special_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveCombinedSpecialItemsDto.prototype, "special_group_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveCombinedSpecialItemsDto.prototype, "product_description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveCombinedSpecialItemsDto.prototype, "special_price", void 0);
class UpdateSpecialDto extends (0, mapped_types_1.PartialType)(SaveSpecialDto) {
}
exports.UpdateSpecialDto = UpdateSpecialDto;
class UpdateSpecialItemsDto extends (0, mapped_types_1.PartialType)(SaveSpecialItemsDto) {
}
exports.UpdateSpecialItemsDto = UpdateSpecialItemsDto;
class UpdateCombinedSpecialItemsDto extends (0, mapped_types_1.PartialType)(SaveCombinedSpecialItemsDto) {
}
exports.UpdateCombinedSpecialItemsDto = UpdateCombinedSpecialItemsDto;
class GetAllRewardsDto {
}
exports.GetAllRewardsDto = GetAllRewardsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetAllRewardsDto.prototype, "reward_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "reward_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "reward", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "reward_type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetAllRewardsDto.prototype, "reward_price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllRewardsDto.prototype, "age_group", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetAllRewardsDto.prototype, "isActive", void 0);
class SaveRewardsDto {
}
exports.SaveRewardsDto = SaveRewardsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "reward_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "reward", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "reward_type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveRewardsDto.prototype, "reward_price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRewardsDto.prototype, "age_group", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveRewardsDto.prototype, "isActive", void 0);
class UpdateRewardsDto extends (0, mapped_types_1.PartialType)(SaveRewardsDto) {
}
exports.UpdateRewardsDto = UpdateRewardsDto;
class GetSurveysDto {
}
exports.GetSurveysDto = GetSurveysDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetSurveysDto.prototype, "survey_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSurveysDto.prototype, "survey_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSurveysDto.prototype, "survey_category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSurveysDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSurveysDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSurveysDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSurveysDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSurveysDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetSurveysDto.prototype, "isActive", void 0);
class SaveSurveyDto {
}
exports.SaveSurveyDto = SaveSurveyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSurveyDto.prototype, "survey_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSurveyDto.prototype, "survey_category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSurveyDto.prototype, "store_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSurveyDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSurveyDto.prototype, "loyalty_tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSurveyDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveSurveyDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveSurveyDto.prototype, "isActive", void 0);
class UpdateSurveyDto extends (0, mapped_types_1.PartialType)(SaveSurveyDto) {
}
exports.UpdateSurveyDto = UpdateSurveyDto;
class GetSurveyIdDto {
}
exports.GetSurveyIdDto = GetSurveyIdDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetSurveyIdDto.prototype, "survey_id", void 0);
class SaveSurveyQuestionsDto {
}
exports.SaveSurveyQuestionsDto = SaveSurveyQuestionsDto;
class UpdateSurveyQuestionsDto extends (0, mapped_types_1.PartialType)(SaveSurveyQuestionsDto) {
}
exports.UpdateSurveyQuestionsDto = UpdateSurveyQuestionsDto;
//# sourceMappingURL=admin.dto.js.map