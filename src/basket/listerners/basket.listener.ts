import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { BasketService } from '../basket.service';
import { ProductDto } from '../dto/basket.dto';
import { format } from "date-fns";

let clientLy_basket_id = 0;
let clientLy_customer_id = 0;
let clientLy_basket_quantity = 0;

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
  async handleBasketSaved(eventData: { product: string[]; basket_id: number; customer_id: number; quantity: number; }) {
    const { product, basket_id, customer_id, quantity } = eventData; // Destructure basket_id, customer_id, quantity

    console.log('[EVENT TRIGGERED] - Fetching product prices for: ', product);

    console.log('CLIENT DATA - CLIENT DATA - CLIENT DATA: ', {
      basket_id,
      customer_id,
      quantity
    });

    //assign to gloabl variavles
    clientLy_basket_id = eventData.basket_id
    clientLy_customer_id = eventData.customer_id
    clientLy_basket_quantity = eventData.quantity
  
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

  /**
  * Handles the 'basket.items.save' event to save basket items after fetching product prices.
  */
  @OnEvent('basket.items.save')
  async handleBasketItemsSave(eventData: { productPrices: ProductDto[] }) {
    console.log('IETMS EVENT TRIGGERED, Saving basket items for:', eventData.productPrices);
  
    const { productPrices } = eventData;

    const insertionTime = format(
      new Date(),
      "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX"
    );
  
    try {
        // Extract required data
        const basketItems = productPrices.map(({ selling_incl_1, description }) => ({
          price: selling_incl_1,
          description,
        }));

        // Calculate the quantity for each item based on total basket quantity
        const individualQuantity = Math.floor(clientLy_basket_quantity / productPrices.length);


        // Save the basket items
        await Promise.all(
          basketItems.map((item) =>
            this.basketService.saveCustomerBasketItems({
              basket_id: clientLy_basket_id,
              customer_id: clientLy_customer_id,
              product: basketItems.map((item) => item.description), // Save each product individually
              quantity: individualQuantity, // Assign calculated quantity
              product_price: item.price, // Save the specific price for each product
              insertion_time: insertionTime,
            })
          )
        );

        console.log('EVENT SUCCESS, Basket items saved successfully.');
      } catch (error) {
        console.error('EVENT ERROR, Error saving basket items:', error.message);
      }
  }
}