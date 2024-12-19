export declare class ProductstDto {
    id: number;
    item_code: string;
    selling_incl_1: number;
    special_price_incl: number;
    description_1: string;
}
export declare class ActiveProductSpecialsDto {
    special_id: number;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
    product_description: string;
    special_price: number;
}
export declare class UpcomingProductSpecialsDto {
    special_id: number;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
    product_description: string;
    special_price: number;
}
export declare class ActiveCombinedSpecialsDto {
    special_id: number;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
    product_description: string;
    special_price: number;
}
export declare class UpcomingCombinedSpecialsDto {
    special_id: number;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
    product_description: string;
    special_price: number;
}
export declare class AllProductSpecialsDto {
    special_id: number;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
    product_description: string;
    special_price: number;
}
export declare class AllCombinedSpecialsDto {
    special_id: number;
    special_name: string;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
    special_group_id: number;
    product_description: string;
    special_price: number;
}
export declare class AllSpecialsDto {
    special_id: number;
    special_name: string;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
}
export declare class UpcomingSpecialsDto {
    special_id: number;
    special_name: string;
    special: string;
    special_type: string;
    store_id: string;
    start_date: string;
    expiry_date: string;
    special_value: string;
    isActive: number;
}
export declare class ActiveRewardsDto {
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
export declare class UpcomingRewardsDto {
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
export declare class ActiveSurveysDto {
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
export declare class UpcomingSurveysDto {
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
export declare class StoresDto {
    id: number;
    code: string;
    description: string;
    address_1: string;
    address_2: string;
    address_3: string;
    address_4: string;
    address_5: string;
    address_6: string;
}
export declare class LoyaltyCustomersDto {
    CustomerID: number;
    FirstName: string;
    LastName: string;
    MobileNumber: string;
    Age: number;
    Gender: string;
    Birthday: string;
    Ethnicity: string;
    EmploymentStatus: string;
    Email: string;
    LoyaltyTier: string;
}
//# sourceMappingURL=products.dto.d.ts.map