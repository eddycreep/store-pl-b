import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { BasketService } from '../basket.service';
import { CustomerBasketDto } from '../dto/basket.dto';
import { format } from "date-fns";

@Injectable()
export class BasketListener implements OnModuleInit {
  constructor(private readonly basketService: BasketService, private readonly eventEmitter: EventEmitter2) {}

  onModuleInit() {
    // Listen to basket.saved events
    this.eventEmitter.on('save-basket-items', (data: CustomerBasketDto) => {
      this.handleBasketSaved(data);
    });
  }

  @OnEvent('save-basket-items') // Listener for basket.saved
  async handleBasketSaved(CustomerBasketDto: CustomerBasketDto) {
    console.log('Executing save-basket-items method...'); // Log execution


    const { basket_id, customer_id, product, quantity } = CustomerBasketDto;

    const insertionTime = format(
        new Date(),
        "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX"
      );

    // Destructure product array and prepare data for saving
    const SaveBasketItemsDto = {
        basket_id: basket_id, // Corrected key
        customer_id: customer_id, // Corrected key
        product: product.map((item) => item), // Treat product as an array
        quantity: quantity,
        insertion_time: insertionTime, // Corrected key
    };

    // Trigger saving of basket items
    await this.basketService.saveCustomerBasketItems(SaveBasketItemsDto);
  }
}