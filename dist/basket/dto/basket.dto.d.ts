export declare class CustomerBasketDto {
    basket_id: number;
    customer_id: number;
    card_number: string;
    product: [];
    quantity: number;
    purchase_date: string;
    total_amount: number;
    payment_method: string;
}
export declare class ProductDto {
    id: number;
    selling_incl_1: number;
    special_price_incl: number;
    description: string;
}
export declare class SaveBasketItemsDto {
    basket_id: number;
    customer_id: number;
    product: string[];
    quantity: number;
    product_price: number;
    insertion_time: string;
}
export declare class UpdateBasketItemPricesDto {
    product_price?: number;
}
export declare class LoyaltyCustomersDto {
    CustomerID: number;
    LoyaltyTier: string;
}
export declare class ProductSpecialsDto {
    special_id: number;
    special_name: string;
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
export declare class CombinedProductSpecialsDto {
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
export declare class FinalTransactionDto {
    basket_id: number;
    customer_id: number;
    card_number: string;
    basket_quantity: number;
    total_basket_amount: number;
    disc_total_basket_amount: number;
    payment_method: string;
    purchase_date: string;
}
export declare class BasketItemsDiscDto {
    basket_id: number;
    product: string;
    discount_applied: number;
    final_price: number;
}
//# sourceMappingURL=basket.dto.d.ts.map