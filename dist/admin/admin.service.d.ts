import { DatabaseService } from '../database/database.service';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto, SaveRewardsDto, UpdateRewardsDto, SaveSurveyDto, UpdateSurveyDto, GetSurveyIdDto, SaveSurveyQuestionsDto, UpdateSurveyQuestionsDto } from './dto/admin.dto';
export declare class AdminService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    saveSpecial(data: SaveSpecialDto): Promise<import("mysql2").QueryResult>;
    getSpecialID(specialName: string): Promise<any>;
    saveSpecialItems(saveSpecialItemsDto: SaveSpecialItemsDto): Promise<import("mysql2").QueryResult>;
    saveCombinedSpecialItems(saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto): Promise<import("mysql2").QueryResult>;
    getAllRewards(): Promise<import("mysql2").QueryResult>;
    saveReward(data: SaveRewardsDto): Promise<{
        message: string;
    }>;
    updateReward(rewardId: number, updateRewardsDto: UpdateRewardsDto): Promise<{
        message: string;
    }>;
    getAllSurveys(): Promise<import("mysql2").QueryResult>;
    saveSurvey(data: SaveSurveyDto): Promise<{
        message: string;
    }>;
    getSurveyID(surveyTitle: string): Promise<GetSurveyIdDto[]>;
    saveSurveyQuestions(surveyQuestionsDto: SaveSurveyQuestionsDto): Promise<{
        message: string;
    }>;
    updateSurvey(surveyId: number, surveyData: UpdateSurveyDto): Promise<{
        message: string;
    }>;
    updateSurveyQuestions(surveyId: number, updateSurveyQuestionsDto: UpdateSurveyQuestionsDto): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map