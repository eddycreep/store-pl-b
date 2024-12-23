import { EventEmitter2 } from '@nestjs/event-emitter';
import { BasketService } from '../basket.service';
export declare class BasketListener {
    private readonly basketService;
    private readonly eventEmitter;
    constructor(basketService: BasketService, eventEmitter: EventEmitter2);
    handleBasketSaved(eventData: {
        product: string[];
    }): Promise<void>;
}
//# sourceMappingURL=basket.listener.d.ts.map