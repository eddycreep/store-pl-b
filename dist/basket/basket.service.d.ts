import { EventEmitter2 } from '@nestjs/event-emitter';
import { DatabaseService } from '../database/database.service';
import { CustomerBasketDto, SaveBasketItemsDto, ProductDto, LoyaltyCustomersDto } from './dto/basket.dto';
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
}
//# sourceMappingURL=basket.service.d.ts.map