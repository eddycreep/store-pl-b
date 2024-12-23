import { BasketService } from './basket.service';
import { CustomerBasketDto, ProductDto, SaveBasketItemsDto } from './dto/basket.dto';
export declare class BasketController {
    private readonly basketService;
    constructor(basketService: BasketService);
    saveCustomerBasket(customerBasketDto: CustomerBasketDto): Promise<{
        message: string;
    }>;
    fetchProductPrices(productDescription: string): Promise<ProductDto[]>;
    saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto): Promise<void>;
}
//# sourceMappingURL=basket.controller.d.ts.map