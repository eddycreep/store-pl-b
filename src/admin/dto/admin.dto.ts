import { IsString, IsNumber } from 'class-validator';

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


export class SaveSpecialItemsDto {
    @IsNumber() special_id: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number;
}

export class SaveSpecialCombinedItemsDto {
    @IsNumber() special_id: number;
    @IsNumber() special_group_id: number;
    @IsString() item_code: string;
    @IsString() product_description: string;
    @IsNumber() special_price: number;
}

//CHANGE
export class updateSpecialDto {
    @IsString() special_name?: string;
    @IsString() special?: string;
    @IsString() special_type?: string;
    @IsString() store_id?: string;
    @IsString() start_date?: string;
    @IsString() expiry_date?: string;
    @IsString() special_value?: string;
    @IsNumber() isActive?: number;
}

//CHANGE
export class UpdateSpecialItemsDto {
    @IsString() product_description?: string;
    @IsString() special_price?: number;
}

//CHANGE
export class UpdateCombinedSpecialItems {
    @IsString() special_group_id?: number;
    @IsString() product_description?: string;
    @IsNumber() special_price?: number;
}

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


// export class AllSurveysDto {
//     survey_id, survey_title, survey_category, store_id, region, loyalty_tier, start_date, expiry_date, isActive
// }



export class GetSurveyIdDto {
    @IsNumber() survey_id: number;
}

// export class SaveSurveyQuestions {
//     survey_id, question_text, question_type
// }