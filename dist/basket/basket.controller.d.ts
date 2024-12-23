import { BasketService } from './basket.service';
import { CustomerBasketDto, SaveBasketItemsDto, FinalTransactionDto, BasketItemsDiscDto } from './dto/basket.dto';
export declare class BasketController {
    private readonly basketService;
    constructor(basketService: BasketService);
    saveCustomerBasket(customerBasketDto: CustomerBasketDto): Promise<{
        message: string;
    }>;
    fetchProductPrices(productDescription: string): Promise<{
        message: string;
        productPrices: import("./dto/basket.dto").ProductDto[];
    }>;
    saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto): Promise<void>;
    checkLoyaltyCustomer(customerId: string): Promise<{
        message: string;
        loyaltyData: import("./dto/basket.dto").LoyaltyCustomersDto[];
    }>;
    checkProductSpecials(productDescription: string): Promise<{
        message: string;
        normal_specials: import("./dto/basket.dto").ProductSpecialsDto[];
    }>;
    checkCombinedSpecials(productDescription: string): Promise<{
        message: string;
        combined_specials: import("./dto/basket.dto").CombinedProductSpecialsDto[];
    }>;
    updateBasketItemsDisc(basketItemsDiscDtos: BasketItemsDiscDto[]): Promise<{
        message: string;
    }>;
    saveFinalTransaction(finalTransactionDto: FinalTransactionDto): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=basket.controller.d.ts.map