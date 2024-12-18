import { EventEmitter2 } from '@nestjs/event-emitter';
import { DatabaseService } from '../database/database.service';
import { CustomerBasketDto, SaveBasketItemsDto, FinalTransactionDto, ProductDto, LoyaltyCustomersDto, ProductSpecialsDto, CombinedProductSpecialsDto } from './dto/basket.dto';
export declare class BasketService {
    private readonly databaseService;
    private readonly eventEmitter;
    constructor(databaseService: DatabaseService, eventEmitter: EventEmitter2);
    saveCustomerBasket(CustomerBasketDto: CustomerBasketDto): Promise<import("mysql2").QueryResult>;
    saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto): Promise<import("mysql2").QueryResult[]>;
    checkLoyaltyCustomer(customerId: string): Promise<LoyaltyCustomersDto[]>;
    checkProductSpecials(products: string[]): Promise<ProductSpecialsDto[]>;
    checkCombinedProductSpecials(products: string[]): Promise<CombinedProductSpecialsDto[]>;
    fetchProductPrices(products: string[]): Promise<ProductDto[]>;
    saveFinalTransaction(finalTransactionDto: FinalTransactionDto): Promise<import("mysql2").QueryResult[]>;
}
