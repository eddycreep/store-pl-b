import { AdminService } from './admin.service';
import { Controller, Post, Get, Patch, Body, Param, BadRequestException} from '@nestjs/common';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto, UpdateSpecialDto, SaveRewardsDto, UpdateRewardsDto, 
GetSurveysDto, SaveSurveyDto, UpdateSurveyDto, GetSurveyIdDto, SaveSurveyQuestionsDto, UpdateSurveyQuestionsDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('/save-special')
    async saveSpecial(@Body() saveSpecialDto: SaveSpecialDto) {
        return this.adminService.saveSpecial(saveSpecialDto);
    }

    // @Get('/getspecialid/:special_name')
    @Get('/get-special-id/:special_name')
    async getSpecialInfo(@Param('special_name') specialName: string) {
        return this.adminService.getSpecialInfo(specialName);
    }


    @Get('/get-reward-info/:reward_title')
    async getRewardInfo(@Param('reward_title') rewardTitle: string) {
        return this.adminService.getRewardInfo(rewardTitle);
    }

    @Post('/save-special-items')
    async saveSpecialItems(@Body() saveSpecialItemsDto: SaveSpecialItemsDto) {
        return this.adminService.saveSpecialItems(saveSpecialItemsDto);
    }

    @Post('/save-combined-special-items')
    async saveCombinedSpecialItems(@Body() saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto) {
        return this.adminService.saveCombinedSpecialItems(saveCombinedSpecialItemsDto);
    }

    /**
     * Retrieves all rewards.
     */
    @Get('get-all-rewards')
    async getAllRewards() {
        return this.adminService.getAllRewards();
    }


    @Post('save-reward')
    async saveReward(@Body() saveRewardsDto: SaveRewardsDto) {
        return this.adminService.saveReward(saveRewardsDto);
    }

    /**
     * Updates an existing reward.
     * @param rewardId The ID of the reward to update.
     * @param updateRewardsDto Updated reward details.
     */
    @Patch('update-reward/:reward_id')
    async updateReward(@Param('reward_id') rewardId: number, @Body() updateRewardsDto: UpdateRewardsDto) {
        return this.adminService.updateReward(rewardId, updateRewardsDto);
    }


    @Get('get-all-surveys')
    async getAllSurveys() {
        return this.adminService.getAllSurveys();
    }


    @Post('save-survey')
    async saveSurvey(@Body() saveSurveyDto: SaveSurveyDto) {
        try {
            // Call the service to fetch the survey ID
            return this.adminService.saveSurvey(saveSurveyDto);
        } catch (error) {
            // Handle and propagate any errors
            throw new BadRequestException(error.message);
        }
    }

    /**
     * Retrieves the survey ID based on the survey title.
     * @param surveyTitle The title of the survey.
     */
    @Get('get-survey-id/:survey_title')
    async getSurveyID(@Param('survey_title') surveyTitle: string) {
        try {
            // Call the service to fetch the survey ID
            return await this.adminService.getSurveyID(surveyTitle);
        } catch (error) {
            // Handle and propagate any errors
            throw new BadRequestException(error.message);
        }
    }
    
    /**
    * Saves survey questions linked to a specific survey.
    * @param surveyQuestions Data containing survey ID, question text, and type.
    */
    @Post('save-survey-questions')
    async saveSurveyQuestions(@Body() surveyQuestionsDto: SaveSurveyQuestionsDto) {
        return this.adminService.saveSurveyQuestions(surveyQuestionsDto);
    }
    
    /**
    * Updates a survey's details.
    * @param surveyId The ID of the survey to update.
    * @param surveyData The updated survey data.
    */
    @Patch('update-survey/:survey_id')
    async updateSurvey(@Param('survey_id') surveyId: number, @Body() surveyData: UpdateSurveyDto) {
        return this.adminService.updateSurvey(surveyId, surveyData);
    }
    
    /**
    * Updates the questions linked to a survey.
    * @param surveyId The ID of the survey whose questions are being updated.
    * @param questionData The updated question data.
    */
    @Patch('update-survey-questions/:survey_id')
    async updateSurveyQuestions(@Param('survey_id') surveyId: number, @Body() questionData: UpdateSurveyQuestionsDto,) {
        return this.adminService.updateSurveyQuestions(surveyId, questionData);
    }
}