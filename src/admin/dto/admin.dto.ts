import { IsString, IsNumber } from 'class-validator';
import { PartialType } from "@nestjs/mapped-types"; 

export class SaveSpecialDto {
    @IsString() special_name: string;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number;
}

export class SpecialInfoDto {
    @IsNumber()  special_id: number;
    @IsString()  special_name: string;
    @IsString()  special: string;
    @IsString()  special_type: string
}

export class RewardInfoDto {
    @IsNumber()  special_id: number;
    @IsString()  special_name: string;
    @IsString()  special: string;
    @IsString()  special_type: string
}


export class SaveSpecialItemsDto {
    @IsNumber() special_id: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number;
}

export class SaveCombinedSpecialItemsDto {
    @IsNumber() special_id: number;
    @IsNumber() special_group_id: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number;
}


export class UpdateSpecialDto extends PartialType(SaveSpecialDto) {}
export class UpdateSpecialItemsDto extends PartialType(SaveSpecialItemsDto) {}
export class UpdateCombinedSpecialItemsDto extends PartialType(SaveCombinedSpecialItemsDto) {}


//REWARDS

export class GetAllRewardsDto {
    @IsNumber() reward_id: number;
    @IsString() reward_title: string;
    @IsString() description: string;
    @IsString() reward: string;
    @IsString() reward_type: string;
    @IsNumber() reward_price: number;
    @IsString() store_id: string;
    @IsString() region: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() loyalty_tier: string;
    @IsString() age_group: string;
    @IsNumber() isActive: number;
}


export class SaveRewardsDto {
    @IsString() reward_title: string;
    @IsString() description: string;
    @IsString() reward: string;
    @IsString() reward_type: string;
    @IsNumber() reward_price: number;
    @IsString() store_id: string;
    @IsString() region: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() loyalty_tier: string;
    @IsString() age_group: string;
    @IsNumber() isActive: number;
}

export class UpdateRewardsDto extends PartialType(SaveRewardsDto) {}


export class GetSurveysDto {
    @IsNumber() survey_id: number;
    @IsString() survey_title: string;
    @IsString() survey_category: string;
    @IsString() store_id: string;
    @IsString() region: string;
    @IsString() loyalty_tier: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsNumber() isActive: number;
}


export class SaveSurveyDto {
    @IsString() survey_title: string;
    @IsString() survey_category: string;
    @IsString() store_id: string;
    @IsString() region: string;
    @IsString() loyalty_tier: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsNumber() isActive: number;
}

export class UpdateSurveyDto extends PartialType(SaveSurveyDto) {}


export class GetSurveyIdDto {
    @IsNumber() survey_id: number;
}

export class SaveSurveyQuestionsDto {
    survey_id: number;
    question_text: string;
    question_type: string;
}

export class UpdateSurveyQuestionsDto extends PartialType(SaveSurveyQuestionsDto) {} //update survey questions 