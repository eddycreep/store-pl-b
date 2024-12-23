import { EventEmitter2 } from '@nestjs/event-emitter';
import { BasketService } from '../basket.service';
import { ProductDto } from '../dto/basket.dto';
export declare class BasketListener {
    private readonly basketService;
    private readonly eventEmitter;
    constructor(basketService: BasketService, eventEmitter: EventEmitter2);
    handleBasketSaved(eventData: {
        product: string[];
        basket_id: number;
        customer_id: number;
        quantity: number;
    }): Promise<void>;
    handleBasketItemsSave(eventData: {
        productPrices: ProductDto[];
    }): Promise<void>;
}
//# sourceMappingURL=basket.listener.d.ts.map