import { DatabaseService } from '../database/database.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto, UpdateSpecialDto, SaveRewardsDto, UpdateRewardsDto, 
GetSurveysDto, SaveSurveyDto, UpdateSurveyDto, GetSurveyIdDto, SaveSurveyQuestionsDto, UpdateSurveyQuestionsDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
    constructor(private readonly databaseService: DatabaseService) {}

    async saveSpecial(data: SaveSpecialDto) {
        const query = `INSERT INTO loyalty_program.tblspecials (special_name, special, special_type, store_id, start_date, expiry_date, special_value, isActive)VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        try {
            return await this.databaseService.query(query, Object.values(data));
        } catch (error) {
            console.error('Error saving special:', error.message);
            throw new BadRequestException('Unable to save special');
        }
    }

    async getSpecialID(specialName: string) {
        const query = `SELECT special_id FROM loyalty_program.tblspecials WHERE special_name = ?`;
    
        try {
            const result: any = await this.databaseService.query(query, [specialName]);
    
            // Ensure `result` is an array (typical for SELECT queries)
            if (!Array.isArray(result) || result.length === 0) {
                throw new NotFoundException('Special ID not found');
            }
    
            return result[0];
        } catch (error) {
            console.error('Error retrieving special ID:', error.message);
            throw error;
        }
    }
    

    async saveSpecialItems(saveSpecialItemsDto: SaveSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecialitems (special_id, product_description, special_price)VALUES (?, ?, ?)`;
        
        try {
            return await this.databaseService.query(query, Object.values(saveSpecialItemsDto));
        } catch (error) {
            console.error('Error saving product special items:', error.message);
            throw new BadRequestException('Unable to save product special items');
        }
    }

    async saveCombinedSpecialItems(saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecials_combinedgroup (special_id, special_group_id, product_description, special_price)VALUES (?, ?, ?, ?)`;

        try {
            return await this.databaseService.query(query, Object.values(saveCombinedSpecialItemsDto));
        } catch (error) {
            console.error('Error saving combined special items:', error.message);
            throw new BadRequestException('Unable to save combined special items');
        }
    }

    /**
   * Fetches all rewards from the database.
   * @returns A list of rewards.
   */
    async getAllRewards() {
        const query = `
        SELECT reward_id, reward_title, description, reward, reward_type, reward_price, store_id, region, 
        start_date, expiry_date, loyalty_tier, age_group, isActive
        FROM loyalty_program.tblrewards
        `;
        try {
        return await this.databaseService.query(query, null);
        } catch (error) {
        console.error('Error fetching rewards:', error.message);
        throw new BadRequestException('Unable to fetch rewards');
        }
    }

    /**
   * Saves a new reward to the database.
   * @param data Reward details.
   */
    async saveReward(data: SaveRewardsDto) {
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
        } catch (error) {
        console.error('Error saving reward:', error.message);
        throw new BadRequestException('Unable to save reward');
        }
    }

    async updateReward(rewardId: number, updateRewardsDto: UpdateRewardsDto) {
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
        } catch (error) {
            console.error('Error updating Reward:', error.message);
            throw new BadRequestException('Error updating Reward: ' + error.message);
        }
    }

    /**
   * Fetches all surveys from the database.
   * @returns A list of surveys.
   */
    async getAllSurveys() {
        const query = `
        SELECT survey_id, survey_title, survey_category, store_id, region, loyalty_tier, start_date, expiry_date, isActive 
        FROM loyalty_program.tblsurvey
        `;
        try {
        return await this.databaseService.query(query, null);
        } catch (error) {
        console.error('Error fetching surveys:', error.message);
        throw new BadRequestException('Unable to fetch surveys');
        }
    }

    /**
     * Saves a new survey to the database.
     * @param data Survey details.
     */
    async saveSurvey(data: SaveSurveyDto) {
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
        } catch (error) {
        console.error('Error saving survey:', error.message);
        throw new BadRequestException('Unable to save survey');
        }
    }

    /**
     * Retrieves the survey ID based on the survey title.
     * @param surveyTitle The title of the survey.
     * @returns The survey ID.
     * @throws NotFoundException If no survey is found.
     */
    async getSurveyID(surveyTitle: string): Promise<GetSurveyIdDto[]> {
        // SQL query to check the loyalty tier for a specific customer
        const query = `SELECT survey_id FROM loyalty_program.tblsurvey where survey_title = ?`;

        try {
            // Query the database and explicitly type the result
            const results = await this.databaseService.query(query, [surveyTitle]) as GetSurveyIdDto[];

            // If no results are returned, throw a NotFoundException
            if (results.length === 0) {
                throw new NotFoundException('Survey Not Fount');
            }

            // Return the results (guaranteed to be an array of objects)
            return results;
        } catch (error) {
            // Catch and throw any errors with a detailed message
            throw new BadRequestException('Error fetching the survey id: ' + error.message);
        }
    }
    
    /**
    * Saves survey questions linked to a specific survey.
    * @param surveyQuestions Data containing survey ID, question text, and type.
    * @returns Success message.
    */
    async saveSurveyQuestions(surveyQuestionsDto: SaveSurveyQuestionsDto) {
        const query = `INSERT INTO loyalty_program.tblsurvey_questions (survey_id, question_text, question_type) VALUES (?, ?, ?)`;
    
        try {
            await this.databaseService.query(query, [
                surveyQuestionsDto.survey_id,
                surveyQuestionsDto.question_text,
                surveyQuestionsDto.question_type,
            ]);

            return { message: 'Survey questions saved successfully' };
        } catch (error) {
            console.error('Error saving survey questions:', error.message);
            throw new BadRequestException('Error saving survey questions: ' + error.message);
        }
    }
    
    /**
    * Updates a survey's details.
    * @param surveyId The ID of the survey to update.
    * @param surveyData The updated survey data.
    * @returns Success message.
    */
    async updateSurvey(surveyId: number, surveyData: UpdateSurveyDto) {
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
        } catch (error) {
            console.error('Error updating survey:', error.message);
            throw new BadRequestException('Error updating survey: ' + error.message);
        }
    }
    
    /**
         * Updates the questions linked to a survey.
         * @param surveyId The ID of the survey whose questions are being updated.
         * @param questionData The updated question data.
         * @returns Success message.
         */
    async updateSurveyQuestions(surveyId: number, updateSurveyQuestionsDto: UpdateSurveyQuestionsDto) {
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
        } catch (error) {
            console.error('Error updating survey questions:', error.message);
            throw new BadRequestException('Error updating survey questions: ' + error.message);
        }
    }
}