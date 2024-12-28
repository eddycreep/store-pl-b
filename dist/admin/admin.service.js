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
exports.AdminService = void 0;
const database_service_1 = require("../database/database.service");
const common_1 = require("@nestjs/common");
let AdminService = class AdminService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async saveSpecial(data) {
        const query = `INSERT INTO loyalty_program.tblspecials (special_name, special, special_type, store_id, start_date, expiry_date, special_value, isActive)VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        try {
            return await this.databaseService.query(query, Object.values(data));
        }
        catch (error) {
            console.error('Error saving special:', error.message);
            throw new common_1.BadRequestException('Unable to save special');
        }
    }
    async getSpecialInfo(specialName) {
        const query = `SELECT special_id, special_name, special, special_type FROM loyalty_program.tblspecials WHERE special_name = ?`;
        try {
            const results = await this.databaseService.query(query, [specialName]);
            if (results.length === 0) {
                throw new common_1.NotFoundException('Special not found on the loyalty program');
            }
            return results;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async saveSpecialItems(saveSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecialitems (special_id, product_description, special_price)VALUES (?, ?, ?)`;
        try {
            return await this.databaseService.query(query, Object.values(saveSpecialItemsDto));
        }
        catch (error) {
            console.error('Error saving product special items:', error.message);
            throw new common_1.BadRequestException('Unable to save product special items');
        }
    }
    async saveCombinedSpecialItems(saveCombinedSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecials_combinedgroup (special_id, special_group_id, product_description, special_price)VALUES (?, ?, ?, ?)`;
        try {
            return await this.databaseService.query(query, Object.values(saveCombinedSpecialItemsDto));
        }
        catch (error) {
            console.error('Error saving combined special items:', error.message);
            throw new common_1.BadRequestException('Unable to save combined special items');
        }
    }
    async getAllRewards() {
        const query = `
        SELECT reward_id, reward_title, description, reward, reward_type, reward_price, store_id, region, 
        start_date, expiry_date, loyalty_tier, age_group, isActive
        FROM loyalty_program.tblrewards
        `;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching rewards:', error.message);
            throw new common_1.BadRequestException('Unable to fetch rewards');
        }
    }
    async getRewardInfo(rewardTitle) {
        const query = `SELECT reward_id, reward_title, reward_type FROM loyalty_program.tblrewards WHERE reward_title = ?`;
        try {
            const results = await this.databaseService.query(query, [rewardTitle]);
            if (results.length === 0) {
                throw new common_1.NotFoundException('Reward not found on the loyalty program');
            }
            return results;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async saveReward(data) {
        const query = `
        INSERT INTO loyalty_program.tblrewards 
        (reward_title, description, reward, reward_type, reward_price, store_id, region, start_date, expiry_date, loyalty_tier, age_group, isActive)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            data.reward_title,
            data.description,
            data.reward,
            data.reward_type,
            data.reward_price,
            data.store_id,
            data.region,
            data.start_date,
            data.expiry_date,
            data.loyalty_tier,
            data.age_group,
            data.isActive,
        ];
        try {
            await this.databaseService.query(query, params);
            return { message: 'Reward saved successfully' };
        }
        catch (error) {
            console.error('Error saving reward:', error.message);
            throw new common_1.BadRequestException('Unable to save reward');
        }
    }
    async updateReward(rewardId, updateRewardsDto) {
        const query = `
        UPDATE loyalty_program.tblrewards SET reward_title = ?, description = ?, reward = ?, reward_type = ?, reward_price = ?, store_id = ?, region = ?, start_date = ?, expiry_date = ?, loyalty_tier = ?, age_group = ?, isActive = ? WHERE reward_id = ?
        `;
        try {
            await this.databaseService.query(query, [
                updateRewardsDto.reward_title,
                updateRewardsDto.description,
                updateRewardsDto.reward,
                updateRewardsDto.reward_type,
                updateRewardsDto.reward_price,
                updateRewardsDto.store_id,
                updateRewardsDto.region,
                updateRewardsDto.start_date,
                updateRewardsDto.expiry_date,
                updateRewardsDto.loyalty_tier,
                updateRewardsDto.age_group,
                updateRewardsDto.isActive,
                rewardId,
            ]);
            return { message: 'Reward updated successfully' };
        }
        catch (error) {
            console.error('Error updating Reward:', error.message);
            throw new common_1.BadRequestException('Error updating Reward: ' + error.message);
        }
    }
    async getAllSurveys() {
        const query = `
        SELECT survey_id, survey_title, survey_category, store_id, region, loyalty_tier, start_date, expiry_date, isActive 
        FROM loyalty_program.tblsurvey
        `;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching surveys:', error.message);
            throw new common_1.BadRequestException('Unable to fetch surveys');
        }
    }
    async saveSurvey(data) {
        const query = `
        INSERT INTO loyalty_program.tblsurvey 
        (survey_title, survey_category, store_id, region, loyalty_tier, start_date, expiry_date, isActive) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            data.survey_title,
            data.survey_category,
            data.store_id,
            data.region,
            data.loyalty_tier,
            data.start_date,
            data.expiry_date,
            data.isActive,
        ];
        try {
            await this.databaseService.query(query, params);
            return { message: 'Survey saved successfully' };
        }
        catch (error) {
            console.error('Error saving survey:', error.message);
            throw new common_1.BadRequestException('Unable to save survey');
        }
    }
    async getSurveyID(surveyTitle) {
        const query = `SELECT survey_id FROM loyalty_program.tblsurvey where survey_title = ?`;
        try {
            const results = await this.databaseService.query(query, [surveyTitle]);
            if (results.length === 0) {
                throw new common_1.NotFoundException('Survey Not Fount');
            }
            return results;
        }
        catch (error) {
            throw new common_1.BadRequestException('Error fetching the survey id: ' + error.message);
        }
    }
    async saveSurveyQuestions(surveyQuestionsDto) {
        const query = `INSERT INTO loyalty_program.tblsurvey_questions (survey_id, question_text, question_type) VALUES (?, ?, ?)`;
        try {
            await this.databaseService.query(query, [
                surveyQuestionsDto.survey_id,
                surveyQuestionsDto.question_text,
                surveyQuestionsDto.question_type,
            ]);
            return { message: 'Survey questions saved successfully' };
        }
        catch (error) {
            console.error('Error saving survey questions:', error.message);
            throw new common_1.BadRequestException('Error saving survey questions: ' + error.message);
        }
    }
    async updateSurvey(surveyId, surveyData) {
        const query = `
            UPDATE loyalty_program.tblsurvey 
            SET survey_title = ?, survey_category = ?, store_id = ?, region = ?, loyalty_tier = ?, start_date = ?, expiry_date = ?, isActive = ?
            WHERE survey_id = ?
        `;
        try {
            await this.databaseService.query(query, [
                surveyData.survey_title,
                surveyData.survey_category,
                surveyData.store_id,
                surveyData.region,
                surveyData.loyalty_tier,
                surveyData.start_date,
                surveyData.expiry_date,
                surveyData.isActive,
                surveyId,
            ]);
            return { message: 'Survey updated successfully' };
        }
        catch (error) {
            console.error('Error updating survey:', error.message);
            throw new common_1.BadRequestException('Error updating survey: ' + error.message);
        }
    }
    async updateSurveyQuestions(surveyId, updateSurveyQuestionsDto) {
        const query = `
                UPDATE loyalty_program.tblsurvey_questions 
                SET question_text = ?, question_type = ? 
                WHERE survey_id = ?
        `;
        try {
            await this.databaseService.query(query, [
                updateSurveyQuestionsDto.question_text,
                updateSurveyQuestionsDto.question_type,
                surveyId,
            ]);
            return { message: 'Survey questions updated successfully' };
        }
        catch (error) {
            console.error('Error updating survey questions:', error.message);
            throw new common_1.BadRequestException('Error updating survey questions: ' + error.message);
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AdminService);
//# sourceMappingURL=admin.service.js.map