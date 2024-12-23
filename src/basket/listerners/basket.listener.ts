import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { BasketService } from '../basket.service';
import { CustomerBasketDto } from '../dto/basket.dto';
import { format } from "date-fns";

@Injectable()
export class BasketListener {
  constructor(
    private readonly basketService: BasketService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  /**
   * Handles the 'basket.saved' event to fetch product prices after saving a basket.
   */
  @OnEvent('basket.saved')
  async handleBasketSaved(eventData: { product: string[] }) {
    console.log('[EVENT TRIGGERED] Fetching product prices for:', eventData.product);
  
    try {
      const productPrices = await this.basketService.fetchProductPrices(eventData.product);
  
      // Log products with missing prices
      const returnedDescriptions = productPrices.map(p => p.description);
      const notFoundItems = eventData.product.filter(product => !returnedDescriptions.includes(product));
  
      if (notFoundItems.length > 0) {
        console.warn(
          '[WARNING] The price for the following items was not found:',
          notFoundItems.join(', '),
        );
      }
  
      console.log('[SUCCESS] Fetched product prices:', productPrices);
    } catch (error) {
      console.error('[ERROR] Failed to fetch product prices:', error.message);
    }
  }
  
}