import { BasketService } from './basket.service';
import { CustomerBasketDto, ProductDto, SaveBasketItemsDto, FinalTransactionDto } from './dto/basket.dto';
export declare class BasketController {
    private readonly basketService;
    constructor(basketService: BasketService);
    saveCustomerBasket(customerBasketDto: CustomerBasketDto): Promise<import("mysql2").QueryResult>;
    saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto): Promise<import("mysql2").QueryResult[]>;
    checkLoyaltyCustomer(customerId: string): Promise<import("./dto/basket.dto").LoyaltyCustomersDto[]>;
    checkProductSpecials(productDescription: string): Promise<import("./dto/basket.dto").ProductSpecialsDto[]>;
    checkCombinedProductSpecials(productDescription: string): Promise<import("./dto/basket.dto").CombinedProductSpecialsDto[]>;
    fetchProductPrices(productDescription: string): Promise<ProductDto[]>;
    saveFinalTransaction(finalTransactionDto: FinalTransactionDto): Promise<import("mysql2").QueryResult[]>;
}
//# sourceMappingURL=basket.controller.d.ts.map