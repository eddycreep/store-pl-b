import { IsString, IsNumber, IsArray } from 'class-validator';

export class CustomerBasketDto {
  @IsNumber() basket_id: number;
  @IsNumber() customer_id: number;
  @IsString() card_number: string;
  @IsString() product: [];
  @IsNumber() quantity: number;
  @IsString() purchase_date: string;
  @IsNumber() total_amount: number;
  @IsString() payment_method: string;
}


export class ProductDto {
  @IsNumber() id: number;
  @IsNumber() selling_incl_1: number;
  @IsNumber() special_price_incl: number;
  @IsString() description: string
}


export class SaveBasketItemsDto {
  @IsNumber() basket_id: number; 
  @IsNumber() customer_id: number; 
  @IsArray() // Changed to reflect an array of strings
  @IsString({ each: true }) product: string[];
  @IsNumber() quantity: number; 
  @IsNumber() product_price: number; 
  @IsString() insertion_time: string;
}


export class UpdateBasketItemPricesDto {
  @IsNumber() product_price?: number; 
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
  @IsString() card_number: string;
  @IsNumber() basket_quantity: number;
  @IsNumber() total_basket_amount: number; 
  @IsNumber() disc_total_basket_amount: number;  
  @IsString() payment_method: string;   
  @IsString() purchase_date: string
}

// export class BasketItemsDiscDto {
//   @IsNumber() basket_id: number;
//   @IsArray() // Changed to reflect an array of strings
//   @IsString({ each: true }) products: string[];
//   @IsNumber() discount_applied: number;  
//   @IsNumber() final_price: number;
// }

// not sure
export class BasketItemsDiscDto {
  @IsNumber() basket_id: number;
  @IsString() product: string;
  @IsNumber() discount_applied: number;  
  @IsNumber() final_price: number;
}