import { EventEmitter2 } from '@nestjs/event-emitter';
import { DatabaseService } from '../database/database.service';
import { CustomerBasketDto, ProductDto, SaveBasketItemsDto, LoyaltyCustomersDto, ProductSpecialsDto, CombinedProductSpecialsDto, FinalTransactionDto, BasketItemsDiscDto } from './dto/basket.dto';
export declare class BasketService {
    private readonly databaseService;
    private readonly eventEmitter;
    constructor(databaseService: DatabaseService, eventEmitter: EventEmitter2);
    saveCustomerBasket(CustomerBasketDto: CustomerBasketDto): Promise<{
        message: string;
    }>;
    fetchProductPrices(products: string[]): Promise<ProductDto[]>;
    saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto): Promise<void>;
    checkLoyaltyCustomer(customerId: string): Promise<LoyaltyCustomersDto[]>;
    checkProductSpecials(products: string[]): Promise<ProductSpecialsDto[]>;
    checkCombinedSpecials(products: string[]): Promise<CombinedProductSpecialsDto[]>;
    updateBasketItemsDisc(basketItemsDiscDtos: BasketItemsDiscDto[]): Promise<{
        message: string;
    }>;
    saveFinalTransaction(finalTransactionDto: FinalTransactionDto): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=basket.service.d.ts.map