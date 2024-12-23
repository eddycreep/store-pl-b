import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DatabaseService } from '../database/database.service';
import { CustomerBasketDto, SaveBasketItemsDto, UpdateBasketItemPricesDto, FinalTransactionDto, ProductDto, LoyaltyCustomersDto, ProductSpecialsDto, CombinedProductSpecialsDto } from './dto/basket.dto';
import { format } from "date-fns";

// global variable for 'saveCustomerBasket' 
let client_basket_id = 0;
let client_customer_id = 0;
let client_card_number = '';
let client_product = [];
let client_quantity = 0;
let client_purchase_date = '';
let client_basket_total_amount = 0;
let client_payment_method = '';

@Injectable()
export class BasketService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  /**
   * Saves customer basket data into the database and triggers an event to fetch product prices.
   */
  async saveCustomerBasket(CustomerBasketDto: CustomerBasketDto) {
    const {
      basket_id,
      customer_id,
      card_number,
      product,
      quantity,
      purchase_date,
      total_amount,
      payment_method,
    } = CustomerBasketDto;

    const formattedPurchaseDate = format(new Date(purchase_date), "yyyy-MM-dd HH:mm:ss");

    const query = `INSERT INTO loyalty_program.tblbasketinfo(basket_id, customer_id, card_number, purchase_date, total_amount, payment_method) 
                    VALUES (?, ?, ?, ?, ?, ?)`;

    try {
      // Save basket data to the database
      await this.databaseService.query(query, [
        basket_id,
        customer_id,
        card_number,
        formattedPurchaseDate,
        total_amount,
        payment_method,
      ]);

      // Update global variables with values from the JSON body
      client_basket_id = basket_id; 
      client_customer_id = customer_id;
      client_card_number = card_number;
      client_product = product;
      client_quantity = quantity;
      client_purchase_date = formattedPurchaseDate; 
      client_basket_total_amount = total_amount;
      client_payment_method = payment_method;

      console.log('[CUSTOMER BASKET SAVED]: ', basket_id);

      // Emit event with additional logging
      //this.eventEmitter.emit('basket.saved', { product });

      this.eventEmitter.emit('basket.saved', { 
        basket_id,
        customer_id,
        quantity,
        product,
      });

      return { message: 'Basket successfully saved.' };
    } catch (error) {
      throw new BadRequestException('Error saving customer basket: ' + error.message);
    }
  }

  async fetchProductPrices(products: string[]): Promise<ProductDto[]> {
    const query = `SELECT mstn.id, mstn.selling_incl_1, mstn.special_price_incl, COALESCE(inv.description_1, inv.description_2) AS description FROM loyalty_program.tblmultistoretrn mstn 
      JOIN loyalty_program.tblinventory inv ON mstn.item_code = inv.item_code WHERE COALESCE(inv.description_1, inv.description_2) IN (?)`;

    try {
      const productPrices = await Promise.all(
        products.map(async (product) => {
          const results = await this.databaseService.query(query, [product]);
          return results as ProductDto[]; // Cast the result to ProductDto[]
        })
      );

      // Flatten the results array
      const flattenedProductPrices = productPrices.flat();

      // Emit the 'basket.items.save' event with the necessary data
      this.eventEmitter.emit('basket.items.save', { productPrices: flattenedProductPrices });

      // Flatten the results array and return the product prices
      return flattenedProductPrices;
    } catch (error) {
      throw new BadRequestException('Error fetching product prices: ' + error.message);
    }
  }
  

  async saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto) {
    const { basket_id, customer_id, product, product_price, quantity } = saveBasketItemsDto;


    const query = `INSERT INTO loyalty_program.tblbasketinfo_items(basket_id, customer_id, product, quantity, product_price, insertion_time)VALUES(?, ?, ?, ?, ?, ?)`;

    const insertionTime = format(
      new Date(),
      "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX"
    );

    try {
      // Map through the product array and insert each product individually
      await Promise.all(
        product.map((productName) =>
          this.databaseService.query(query, [
            basket_id,          // Basket ID
            customer_id,        // Customer ID
            productName,        // Product description
            quantity,           // Quantity
            product_price,      // Price of the product
            insertionTime,      // Timestamp of the insertion
          ])
        )
      );

      // Emit the 'basket.items.save' event with the necessary data
      this.eventEmitter.emit('check.loyalty');

      console.log('[SUCCESS] Basket items successfully saved.');
    } catch (error) {
      throw new BadRequestException('Error saving basket items: ' + error.message);
    }
  }

  async checkLoyaltyCustomer(customerId: string): Promise<LoyaltyCustomersDto[]> {
    // SQL query to check the loyalty tier for a specific customer
    const query = `SELECT CustomerID, LoyaltyTier FROM loyalty_program.tblloyaltycustomers WHERE CustomerID = ?`;
  
    try {
      // Query the database and explicitly type the result
      const results = await this.databaseService.query(query, [customerId]) as LoyaltyCustomersDto[];
  
      // If no results are returned, throw a NotFoundException
      if (results.length === 0) {
        throw new NotFoundException('Customer not found on the loyalty program');
      }
  
      // Return the results (guaranteed to be an array of objects)
      return results;
    } catch (error) {
      // Catch and throw any errors with a detailed message
      throw new BadRequestException('Error checking loyalty customer: ' + error.message);
    }
  }

  // async checkProductSpecials(products: string[]): Promise<ProductSpecialsDto[]> {
  //   const query = `SELECT 
  //                   sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id,
  //                   sp.start_date, sp.expiry_date, sp.special_value, sp.isActive,
  //                   spi.product_description, spi.special_price
  //                   FROM loyalty_program.tblspecials sp
  //                   JOIN loyalty_program.tblspecialitems spi
  //                   ON sp.special_id = spi.special_id
  //                   WHERE sp.special_type = 'Special' 
  //                   AND sp.isActive = 1 
  //                   AND spi.product_description IN (?) 
  //                   AND sp.start_date <= CURDATE() 
  //                   AND sp.expiry_date >= CURDATE()`;

  //   try {
  //     const specials = await Promise.all(
  //       products.map(async (product) => {
  //         const results = await this.databaseService.query(query, [product]);
  //         return results as ProductSpecialsDto[]; // Cast the result to ProductSpecialsDto[]
  //       })
  //     );

  //     // Flatten the results array and return the specials
  //     return specials.flat();
  //   } catch (error) {
  //     throw new BadRequestException('Error fetching product specials: ' + error.message);
  //   }
  // }

  // async checkCombinedProductSpecials(products: string[]): Promise<CombinedProductSpecialsDto[]> {
  //   const query = `SELECT 
  //                     sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id,
  //                     sp.start_date, sp.expiry_date, sp.special_value, sp.isActive,
  //                     spcg.special_group_id, spcg.product_description, spcg.special_price
  //                 FROM 
  //                     loyalty_program.tblspecials sp
  //                 JOIN 
  //                     loyalty_program.tblspecials_combinedgroup spcg 
  //                 ON 
  //                     sp.special_id = spcg.special_id
  //                 WHERE 
  //                     sp.special_type = 'Combined Special' 
  //                     AND sp.isActive = 1 
  //                     AND spcg.product_description IN (?) 
  //                     AND sp.start_date <= CURDATE() 
  //                     AND sp.expiry_date >= CURDATE()`;

  //   try {
  //     const combinedSpecials = await Promise.all(
  //       products.map(async (product) => {
  //         const results = await this.databaseService.query(query, [product]);
  //         return results as CombinedProductSpecialsDto[]; // Cast the result to CombinedProductSpecialsDto[]
  //       })
  //     );

  //     // Flatten the results array and return the combinedSpecials
  //     return combinedSpecials.flat();
  //   } catch (error) {
  //     throw new BadRequestException('Error fetching product specials: ' + error.message);
  //   }
  // }

  // async fetchProductPrices(products: string[]): Promise<ProductDto[]> {
  //   const query = `SELECT mstn.id, mstn.selling_incl_1, mstn.special_price_incl, COALESCE(inv.description_1, inv.description_2) AS description FROM loyalty_program.tblmultistoretrn mstn 
  //     JOIN loyalty_program.tblinventory inv ON mstn.item_code = inv.item_code WHERE COALESCE(inv.description_1, inv.description_2) IN (?)`;

  //   try {
  //     const productPrices = await Promise.all(
  //       products.map(async (product) => {
  //         const results = await this.databaseService.query(query, [product]);
  //         return results as ProductDto[]; // Cast the result to ProductDto[]
  //       })
  //     );

  //     clients_purchasedItem_prices = productPrices.flat();

  //     // Flatten the results array and return the product prices
  //     return productPrices.flat();
  //   } catch (error) {
  //     throw new BadRequestException('Error fetching product prices: ' + error.message);
  //   }
  // }

  // async updateBasketItemPrices(basketId: number, updateBasketItemPricesDto: UpdateBasketItemPricesDto) {
  //   try {
  //     //const { customer_id, quantity } = updateBasketItemPricesDto;
  
  //     // Example purchased items
  //     const basket_id = 15
  //     const purchasedProducts = ["Apple", "Banana", "Orange"];
  
  //     // Step 1: Fetch product prices
  //     const productPrices = await this.fetchProductPrices(purchasedProducts);
  
  //     // Step 2: Map the fetched prices to the purchased products
  //     const updatedBasketItems = purchasedProducts.map((productName) => {
  //       const productPrice = productPrices.find(
  //         (product) => product.description === productName
  //       );
  
  //       if (!productPrice) {
  //         throw new NotFoundException(`Price not found for product: ${productName}`);
  //       }
  
  //       return {
  //         product: productName,
  //         price: productPrice.selling_incl_1,
  //       };
  //     });
  
  //     // Step 3: Update the basket items in the database
  //     for (const item of updatedBasketItems) {
  //       await this.databaseService.query(
  //           `UPDATE loyalty_program.tblbasketinfo_items 
  //           SET product_price = ? 
  //           WHERE product = ? AND basket_id = ?`
  //           ,

  //         [item.price, item.product, basket_id]
  //       );
  //     }
  
  //     return {
  //       message: 'Basket item prices updated successfully.',
  //       updatedItems: updatedBasketItems,
  //     };
  //   } catch (error) {
  //     console.error('Error updating basket item prices:', error.message);
  //     throw new BadRequestException('Error updating basket item prices: ' + error.message);
  //   }
  // }


  // async saveFinalTransaction(finalTransactionDto: FinalTransactionDto) {
  //   const { basket_id, customer_id, purchased_product, quantity, product_amount, product_discounted_amount, total_basket_amount, total_disc_basket_amount, payment_method, purchase_date } = finalTransactionDto;

  //   // Format purchase_date to the required format
  //   const formattedPurchaseDate = format(new Date(purchase_date), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");

  //   const query = `INSERT INTO loyalty_program.tblcompletetransaction (basket_id, customer_id, purchased_product, quantity, product_amount, product_discounted_amount, total_basket_amount, total_disc_basket_amount, payment_method, purchase_date)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  //   try {
  //     // Map through the 'product' array and insert each product individually
  //     return Promise.all(
  //       purchased_product.map((productName) => {
  //         // Directly use the product name as a string instead of an array
  //         return this.databaseService.query(query, [
  //           basket_id,
  //           customer_id,
  //           productName, // Use the product name as a string
  //           quantity,
  //           product_amount,
  //           product_discounted_amount,
  //           total_basket_amount,
  //           total_disc_basket_amount,
  //           payment_method,
  //           formattedPurchaseDate,
  //         ]);
  //       })
  //     );
  //   } catch (error) {
  //     throw new BadRequestException('Error saving customers final transaction: ' + error.message);
  //   }
  // }
}