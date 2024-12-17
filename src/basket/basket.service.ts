import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DatabaseService } from '../database/database.service';
import { CustomerBasketDto, SaveBasketItemsDto, FinalTransactionDto, ProductDto } from './dto/basket.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { format } from "date-fns";

@Injectable()
export class BasketService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly eventEmitter: EventEmitter2, // Inject EventEmitter
  ) {}

  async saveCustomerBasket(CustomerBasketDto: CustomerBasketDto) {
    const { basket_id, customer_id, product, quantity, purchase_date, total_amount, payment_method } = CustomerBasketDto;

    // Format purchase_date to the required format
    const formattedPurchaseDate = format(new Date(purchase_date), "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX");
    
    // SQL query for saving basket information
    const query = `INSERT INTO loyalty_program.tblbasketinfo(basket_id, customer_id, purchase_date, total_amount, payment_method)VALUES (?, ?, ?, ?, ?)`;

    try {
      // Save basket data
      await this.databaseService.query(query, [basket_id, customer_id, formattedPurchaseDate, total_amount, payment_method]);
      

      // Trigger event to save basket items
      this.eventEmitter.emit('save-basket-items', CustomerBasketDto);

      //return this.databaseService.query(query, [basket_id, customer_id, formattedPurchaseDate, total_amount, payment_method]);
    } catch (error) {
      throw new BadRequestException('Error saving customer basket: ' + error.message);
    }
  }

  async saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto) {
    const { basket_id, customer_id, product, quantity } = saveBasketItemsDto;


    const query = `INSERT INTO loyalty_program.tblbasketinfo_items(basket_id, customer_id, product, quantity, insertion_time)VALUES(?, ?, ?, ?, ?)`;

    const insertionTime = format(
      new Date(),
      "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX"
    );

    try {
      // Map through the 'product' array and insert each product individually
      return Promise.all(
        product.map((productName) => {
          // Create a new object for each product
          const itemDto = new SaveBasketItemsDto();
          itemDto.basket_id = basket_id;
          itemDto.customer_id = customer_id;
          itemDto.product = [productName]; // Assign product as a string[] (array with one element)
          itemDto.quantity = quantity;
          itemDto.insertion_time = insertionTime;

          // Pass the correct number of values (matching the columns in the query)
          return this.databaseService.query(query, [
            itemDto.basket_id,         // Basket ID
            itemDto.customer_id,       // Customer ID
            productName,               // Current product (as a string for the query)
            itemDto.quantity,          // Quantity of the product
            itemDto.insertion_time,    // Insertion time
          ]);
        })
      );
    } catch (error) {
      throw new BadRequestException('Error saving basket items: ' + error.message);
    }
  }

  // async checkLoyaltyCustomer(customerId: string) {
  //   const query = `SELECT CustomerID, LoyaltyTier 
  //                   FROM loyalty_program.tblloyaltycustomers 
  //                   WHERE CustomerID = ?`;

  //   try {
  //     const results: any[] = await this.databaseService.query(query, [customerId]);
  //     if (!Array.isArray(results) || results.length === 0) {
  //       throw new NotFoundException('Customer not found');
  //     }
  //     return results;
  //   } catch (error) {
  //     throw new BadRequestException('Error checking loyalty customer: ' + error.message);
  //   }
  // }
}