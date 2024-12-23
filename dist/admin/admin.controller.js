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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_dto_1 = require("./dto/admin.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async saveSpecial(saveSpecialDto) {
        return this.adminService.saveSpecial(saveSpecialDto);
    }
    async getSpecialID(specialName) {
        return this.adminService.getSpecialID(specialName);
    }
    async saveSpecialItems(saveSpecialItemsDto) {
        return this.adminService.saveSpecialItems(saveSpecialItemsDto);
    }
    async saveCombinedSpecialItems(saveCombinedSpecialItemsDto) {
        return this.adminService.saveCombinedSpecialItems(saveCombinedSpecialItemsDto);
    }
    async getAllRewards() {
        return this.adminService.getAllRewards();
    }
    async saveReward(saveRewardsDto) {
        return this.adminService.saveReward(saveRewardsDto);
    }
    async updateReward(rewardId, updateRewardsDto) {
        return this.adminService.updateReward(rewardId, updateRewardsDto);
    }
    async getAllSurveys() {
        return this.adminService.getAllSurveys();
    }
    async saveSurvey(saveSurveyDto) {
        try {
            return this.adminService.saveSurvey(saveSurveyDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getSurveyID(surveyTitle) {
        try {
            return await this.adminService.getSurveyID(surveyTitle);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async saveSurveyQuestions(surveyQuestionsDto) {
        return this.adminService.saveSurveyQuestions(surveyQuestionsDto);
    }
    async updateSurvey(surveyId, surveyData) {
        return this.adminService.updateSurvey(surveyId, surveyData);
    }
    async updateSurveyQuestions(surveyId, questionData) {
        return this.adminService.updateSurveyQuestions(surveyId, questionData);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('/savespecial'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveSpecialDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveSpecial", null);
__decorate([
    (0, common_1.Get)('/getspecialid/:special_name'),
    __param(0, (0, common_1.Param)('special_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSpecialID", null);
__decorate([
    (0, common_1.Post)('/savespecialitems'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveSpecialItemsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveSpecialItems", null);
__decorate([
    (0, common_1.Post)('/savecombinedspecialitems'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveCombinedSpecialItemsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveCombinedSpecialItems", null);
__decorate([
    (0, common_1.Get)('getallrewards'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllRewards", null);
__decorate([
    (0, common_1.Post)('savereward'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveRewardsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveReward", null);
__decorate([
    (0, common_1.Patch)('updatereward/:reward_id'),
    __param(0, (0, common_1.Param)('reward_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, admin_dto_1.UpdateRewardsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateReward", null);
__decorate([
    (0, common_1.Get)('getallsurveys'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllSurveys", null);
__decorate([
    (0, common_1.Post)('savesurvey'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveSurveyDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveSurvey", null);
__decorate([
    (0, common_1.Get)('getsurveyid/:survey_title'),
    __param(0, (0, common_1.Param)('survey_title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSurveyID", null);
__decorate([
    (0, common_1.Post)('savesurveyquestions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveSurveyQuestionsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveSurveyQuestions", null);
__decorate([
    (0, common_1.Patch)('updatesurvey/:survey_id'),
    __param(0, (0, common_1.Param)('survey_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, admin_dto_1.UpdateSurveyDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateSurvey", null);
__decorate([
    (0, common_1.Patch)('updatesurveyquestions/:survey_id'),
    __param(0, (0, common_1.Param)('survey_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, admin_dto_1.UpdateSurveyQuestionsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateSurveyQuestions", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map