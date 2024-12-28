import { AdminService } from './admin.service';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto, SaveRewardsDto, UpdateRewardsDto, SaveSurveyDto, UpdateSurveyDto, GetSurveyIdDto, SaveSurveyQuestionsDto, UpdateSurveyQuestionsDto } from './dto/admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    saveSpecial(saveSpecialDto: SaveSpecialDto): Promise<import("mysql2").QueryResult>;
    getSpecialInfo(specialName: string): Promise<import("./dto/admin.dto").SpecialInfoDto[]>;
    saveSpecialItems(saveSpecialItemsDto: SaveSpecialItemsDto): Promise<import("mysql2").QueryResult>;
    saveCombinedSpecialItems(saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto): Promise<import("mysql2").QueryResult>;
    getAllRewards(): Promise<import("mysql2").QueryResult>;
    saveReward(saveRewardsDto: SaveRewardsDto): Promise<{
        message: string;
        status_text: string;
    }>;
    getRewardInfo(rewardTitle: string): Promise<import("./dto/admin.dto").RewardInfoDto[]>;
    updateReward(rewardId: number, updateRewardsDto: UpdateRewardsDto): Promise<{
        message: string;
    }>;
    getAllSurveys(): Promise<import("mysql2").QueryResult>;
    saveSurvey(saveSurveyDto: SaveSurveyDto): Promise<{
        message: string;
    }>;
    getSurveyID(surveyTitle: string): Promise<GetSurveyIdDto[]>;
    saveSurveyQuestions(surveyQuestionsDto: SaveSurveyQuestionsDto): Promise<{
        message: string;
    }>;
    updateSurvey(surveyId: number, surveyData: UpdateSurveyDto): Promise<{
        message: string;
    }>;
    updateSurveyQuestions(surveyId: number, questionData: UpdateSurveyQuestionsDto): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=admin.controller.d.ts.map