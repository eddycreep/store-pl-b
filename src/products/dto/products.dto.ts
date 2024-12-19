import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';

export class ProductstDto {
    @IsNumber() id: number;
    @IsString() item_code: string;
    @IsNumber() selling_incl_1: number; 
    @IsNumber() special_price_incl: number;
    @IsString() description_1: string;
}


export class ActiveProductSpecialsDto {
    @IsNumber() special_id: number;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number
}


export class UpcomingProductSpecialsDto {
    @IsNumber() special_id: number;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number
}


export class ActiveCombinedSpecialsDto {
    @IsNumber() special_id: number;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number
}


export class UpcomingCombinedSpecialsDto {
    @IsNumber() special_id: number;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number
}


export class AllProductSpecialsDto { 
    @IsNumber() special_id: number;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number;
    @IsString() product_description: string;
    @IsNumber() special_price: number
}

export class AllCombinedSpecialsDto {
    @IsNumber() special_id: number;
    @IsString() special_name: string;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number
    @IsNumber() special_group_id: number
    @IsString() product_description: string;
    @IsNumber() special_price: number
}


export class AllSpecialsDto { 
    @IsNumber() special_id: number;
    @IsString() special_name: string;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number
}


export class UpcomingSpecialsDto {
    @IsNumber() special_id: number;
    @IsString() special_name: string;
    @IsString() special: string;
    @IsString() special_type: string;
    @IsString() store_id: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsString() special_value: string;
    @IsNumber() isActive: number
}


export class ActiveRewardsDto {
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
    @IsNumber() isActive: number
}

export class UpcomingRewardsDto {
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
    @IsNumber() isActive: number
}


export class ActiveSurveysDto {
    @IsNumber() survey_id: number;
    @IsString() survey_title: string;
    @IsString() survey_category: string;
    @IsString() store_id: string;
    @IsString() region: string;
    @IsString() loyalty_tier: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsNumber() isActive: number
}


export class UpcomingSurveysDto {
    @IsNumber() survey_id: number;
    @IsString() survey_title: string;
    @IsString() survey_category: string;
    @IsString() store_id: string;
    @IsString() region: string;
    @IsString() loyalty_tier: string;
    @IsString() start_date: string;
    @IsString() expiry_date: string;
    @IsNumber() isActive: number
}


export class StoresDto {
    @IsNumber() id: number;
    @IsString() code: string;
    @IsString() description: string;
    @IsString() address_1: string;
    @IsString() address_2: string;
    @IsString() address_3: string;
    @IsString() address_4: string;
    @IsString() address_5: string;
    @IsString() address_6: string;
}


export class LoyaltyCustomersDto {
    @IsNumber() CustomerID: number;
    @IsString() FirstName: string;
    @IsString() LastName: string;
    @IsString() MobileNumber: string;
    @IsString() Age: number;
    @IsString() Gender: string;
    @IsString() Birthday: string;
    @IsString() Ethnicity: string;
    @IsString() EmploymentStatus: string;
    @IsString() Email: string;
    @IsString() LoyaltyTier: string;
}