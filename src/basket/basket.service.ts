import { format } from "date-fns";
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DatabaseService } from '../database/database.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CustomerBasketDto, ProductDto, SaveBasketItemsDto, LoyaltyCustomersDto, 
ProductSpecialsDto, CombinedProductSpecialsDto, FinalTransactionDto, BasketItemsDiscDto } from './dto/basket.dto';

// global variables for 'saveCustomerBasket' 
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

      // Emit the 'check.loyalty' event
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

      // Emit the 'check.product.specials' event
      this.eventEmitter.emit('check.product.specials');
  
      // Return the results (guaranteed to be an array of objects)
      return results;
    } catch (error) {
      // Catch and throw any errors with a detailed message
      throw new BadRequestException(error.message);
    }
  }

  async checkProductSpecials(products: string[]): Promise<ProductSpecialsDto[]> {
    const query = `SELECT 
                    sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id,
                    sp.start_date, sp.expiry_date, sp.special_value, sp.isActive,
                    spi.product_description, spi.special_price
                    FROM loyalty_program.tblspecials sp
                    JOIN loyalty_program.tblspecialitems spi
                    ON sp.special_id = spi.special_id
                    WHERE sp.special_type = 'Special' 
                    AND sp.isActive = 1 
                    AND spi.product_description IN (?) 
                    AND sp.start_date <= CURDATE() 
                    AND sp.expiry_date >= CURDATE()`;

    try {
      const specials = await Promise.all(
        products.map(async (product) => {
          const results = await this.databaseService.query(query, [product]);
          return results as ProductSpecialsDto[]; // Cast the result to ProductSpecialsDto[]
        })
      );

      // Emit the 'check.combined.specials' event
      this.eventEmitter.emit('check.combined.specials');

      // Flatten the results array and return the specials
      return specials.flat();
    } catch (error) {
      throw new BadRequestException('Error fetching product specials: ' + error.message);
    }
  }

  async checkCombinedSpecials(products: string[]): Promise<CombinedProductSpecialsDto[]> {
    const query = `SELECT 
                      sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id,
                      sp.start_date, sp.expiry_date, sp.special_value, sp.isActive,
                      spcg.special_group_id, spcg.product_description, spcg.special_price
                  FROM 
                      loyalty_program.tblspecials sp
                  JOIN 
                      loyalty_program.tblspecials_combinedgroup spcg 
                  ON 
                      sp.special_id = spcg.special_id
                  WHERE 
                      sp.special_type = 'Combined Special' 
                      AND sp.isActive = 1 
                      AND spcg.product_description IN (?) 
                      AND sp.start_date <= CURDATE() 
                      AND sp.expiry_date >= CURDATE()`;

    try {
      const combinedSpecials = await Promise.all(
        products.map(async (product) => {
          const results = await this.databaseService.query(query, [product]);
          return results as CombinedProductSpecialsDto[]; // Cast the result to CombinedProductSpecialsDto[]
        })
      );

      // Flatten the results array and return the combinedSpecials
      return combinedSpecials.flat();
    } catch (error) {
      throw new BadRequestException('Error fetching combined specials: ' + error.message);
    }
  }

  async updateBasketItemsDisc(basketItemsDiscDtos: BasketItemsDiscDto[]) {
    // Prepare the SQL query for updating individual items
    const query = `
      UPDATE loyalty_program.tblbasketinfo_items
      SET discount_applied = ?, final_price = ?
      WHERE product = ? AND basket_id = ?`;
  
    try {
      // Iterate over each item in the request body
      for (const item of basketItemsDiscDtos) {
        const { basket_id, product, discount_applied, final_price } = item;
  
        // Update the database for each product
        await this.databaseService.query(query, [
          discount_applied,
          final_price,
          product,
          basket_id
        ]);
      }
  
      return {
        message: `${basketItemsDiscDtos.length} Basket Items discounted prices updated successfully`,
      };
    } catch (error) {
      throw new BadRequestException(
        'Error updating the basket items with their discounted prices: ' + error.message
      );
    }
  }

  async saveFinalTransaction(finalTransactionDto: FinalTransactionDto) {
    const { basket_id, customer_id, card_number, basket_quantity, total_basket_amount, disc_total_basket_amount, payment_method, purchase_date } = finalTransactionDto;

    // Format purchase_date to the required format
    const formattedPurchaseDate = format(new Date(purchase_date), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");

    const query = `INSERT INTO loyalty_program.tblfinaltransaction(basket_id, customer_id, card_number, basket_quantity, total_basket_amount, disc_total_basket_amount, payment_method, purchase_date)VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;

    try {
      // Save basket data to the database
      await this.databaseService.query(query, [
        basket_id,
        customer_id,
        card_number,
        basket_quantity,
        total_basket_amount,
        disc_total_basket_amount,
        payment_method,
        formattedPurchaseDate,
      ]);

      return { message: 'Customers Final Transaction was successfully saved.' };
    } catch (error) {
      throw new BadRequestException('Error saving customers final transaction: ' + error.message);
    }
  }
}