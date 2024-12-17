import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CustomerBasketDto {
  @IsNumber() basket_id: number;
  @IsNumber() customer_id: number;
  @IsString() product: [];
  @IsNumber() quantity: number;
  @IsString() purchase_date: string;
  @IsNumber() total_amount: number;
  @IsString() payment_method: string;
}


export class ProductDto {
  @IsNumber() id: number;
  @IsNumber() selling_incl_1: Number;
  @IsNumber() special_price_incl: number;
  @IsString() description: string
}


export class SaveBasketItemsDto {
  @IsNumber() basket_id: number; 
  @IsNumber() customer_id: number; 
  @IsArray() // Changed to reflect an array of strings
  @IsString({ each: true }) product: string[];
  @IsNumber() quantity: number; 
  @IsString() insertion_time: string;
}


export class UpdateBasketItemsDto {
  @IsNumber() basket_id: number; 
  @IsNumber() product_price?: number; 
  @IsNumber() discount_applied?: number; 
  @IsNumber() final_price?: number; 
}


export class LoyaltyCustomersDto {
  @IsNumber()  CustomerID: number;
  @IsString()  LoyaltyTier: string
}


export class ProductSpecialsDto {
  @IsNumber()  special_id: number; 
  @IsString()  special_name: string;
  @IsString()  special: string;
  @IsString()  special_type: string; 
  @IsString()  store_id: string; 
  @IsString()  start_date: string; 
  @IsString()  expiry_date: string;
  @IsString()  special_value: string;
  @IsNumber()  isActive: number; 
  @IsString()  product_description: string;  
  @IsNumber()  special_price: number  
}


export class CombinedProductSpecialsDto {
  @IsNumber()  special_id: number; 
  @IsString()  special_name: string;
  @IsString()  special: string;
  @IsString()  special_type: string; 
  @IsString()  store_id: string; 
  @IsString()  start_date: string; 
  @IsString()  expiry_date: string;
  @IsString()  special_value: string;
  @IsNumber()  isActive: number; 
  @IsNumber()  special_group_id: number;
  @IsString()  product_description: string;  
  @IsNumber()  special_price: number  
}


export class FinalTransactionDto {
  @IsNumber() basket_id: number;  
  @IsNumber() customer_id: number;
  @IsString() purchased_product: string; 
  @IsNumber() quantity: number;
  @IsNumber() product_amount: number; 
  @IsNumber() product_discounted_amount: number; 
  @IsNumber() total_basket_amount: number; 
  @IsNumber() total_disc_basket_amount: number;  
  @IsString() payment_method: string;   
  @IsString() purchase_date: string
}