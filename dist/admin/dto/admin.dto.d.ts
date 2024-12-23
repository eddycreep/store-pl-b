export declare class SaveSpecialDto {
    special_name: string;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
}
export declare class SaveSpecialItemsDto {
    special_id: number;
    product_description: string;
    special_price: number;
}
export declare class SaveCombinedSpecialItemsDto {
    special_id: number;
    special_group_id: number;
    product_description: string;
    special_price: number;
}
declare const UpdateSpecialDto_base: import("@nestjs/mapped-types").MappedType<Partial<SaveSpecialDto>>;
export declare class UpdateSpecialDto extends UpdateSpecialDto_base {
}
declare const UpdateSpecialItemsDto_base: import("@nestjs/mapped-types").MappedType<Partial<SaveSpecialItemsDto>>;
export declare class UpdateSpecialItemsDto extends UpdateSpecialItemsDto_base {
}
declare const UpdateCombinedSpecialItemsDto_base: import("@nestjs/mapped-types").MappedType<Partial<SaveCombinedSpecialItemsDto>>;
export declare class UpdateCombinedSpecialItemsDto extends UpdateCombinedSpecialItemsDto_base {
}
export declare class GetAllRewardsDto {
    reward_id: number;
    reward_title: string;
    description: string;
    reward: string;
    reward_type: string;
    reward_price: number;
    store_id: string;
    region: string;
    start_date: string;
    expiry_date: string;
    loyalty_tier: string;
    age_group: string;
    isActive: number;
}
export declare class SaveRewardsDto {
    reward_title: string;
    description: string;
    reward: string;
    reward_type: string;
    reward_price: number;
    store_id: string;
    region: string;
    start_date: string;
    expiry_date: string;
    loyalty_tier: string;
    age_group: string;
    isActive: number;
}
declare const UpdateRewardsDto_base: import("@nestjs/mapped-types").MappedType<Partial<SaveRewardsDto>>;
export declare class UpdateRewardsDto extends UpdateRewardsDto_base {
}
export declare class GetSurveysDto {
    survey_id: number;
    survey_title: string;
    survey_category: string;
    store_id: string;
    region: string;
    loyalty_tier: string;
    start_date: string;
    expiry_date: string;
    isActive: number;
}
export declare class SaveSurveyDto {
    survey_title: string;
    survey_category: string;
    store_id: string;
    region: string;
    loyalty_tier: string;
    start_date: string;
    expiry_date: string;
    isActive: number;
}
declare const UpdateSurveyDto_base: import("@nestjs/mapped-types").MappedType<Partial<SaveSurveyDto>>;
export declare class UpdateSurveyDto extends UpdateSurveyDto_base {
}
export declare class GetSurveyIdDto {
    survey_id: number;
}
export declare class SaveSurveyQuestionsDto {
    survey_id: number;
    question_text: string;
    question_type: string;
}
declare const UpdateSurveyQuestionsDto_base: import("@nestjs/mapped-types").MappedType<Partial<SaveSurveyQuestionsDto>>;
export declare class UpdateSurveyQuestionsDto extends UpdateSurveyQuestionsDto_base {
}
export {};
//# sourceMappingURL=admin.dto.d.ts.map