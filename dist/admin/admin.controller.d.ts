import { AdminService } from './admin.service';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto, SaveRewardsDto, UpdateRewardsDto, SaveSurveyDto, UpdateSurveyDto, GetSurveyIdDto, SaveSurveyQuestionsDto, UpdateSurveyQuestionsDto } from './dto/admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    saveSpecial(saveSpecialDto: SaveSpecialDto): Promise<any>;
    getSpecialID(specialName: string): Promise<any>;
    saveSpecialItems(saveSpecialItemsDto: SaveSpecialItemsDto): Promise<any>;
    saveCombinedSpecialItems(saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto): Promise<any>;
    getAllRewards(): Promise<any>;
    saveReward(saveRewardsDto: SaveRewardsDto): Promise<{
        message: string;
    }>;
    updateReward(rewardId: number, updateRewardsDto: UpdateRewardsDto): Promise<{
        message: string;
    }>;
    getAllSurveys(): Promise<any>;
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