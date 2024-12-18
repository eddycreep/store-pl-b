import { OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { BasketService } from '../basket.service';
import { CustomerBasketDto } from '../dto/basket.dto';
export declare class BasketListener implements OnModuleInit {
    private readonly basketService;
    private readonly eventEmitter;
    constructor(basketService: BasketService, eventEmitter: EventEmitter2);
    onModuleInit(): void;
    handleBasketSaved(CustomerBasketDto: CustomerBasketDto): Promise<void>;
}
