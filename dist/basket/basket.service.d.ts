import { EventEmitter2 } from '@nestjs/event-emitter';
import { DatabaseService } from '../database/database.service';
import { CustomerBasketDto, SaveBasketItemsDto, ProductDto } from './dto/basket.dto';
export declare class BasketService {
    private readonly databaseService;
    private readonly eventEmitter;
    constructor(databaseService: DatabaseService, eventEmitter: EventEmitter2);
    saveCustomerBasket(CustomerBasketDto: CustomerBasketDto): Promise<{
        message: string;
    }>;
    fetchProductPrices(products: string[]): Promise<ProductDto[]>;
    saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto): Promise<void>;
}
//# sourceMappingURL=basket.service.d.ts.map