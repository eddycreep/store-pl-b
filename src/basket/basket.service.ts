import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CustomerBasketDto, SaveBasketItemsDto, FinalTransactionDto, ProductDto } from './dto/basket.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { format } from "date-fns";

let customer_basket_id;
let customer_ID;
let customer_products;
let customer_quantity;
let customer_purchase_date;
let customer_total_amount;
let customer_payment_method;

@Injectable()
export class BasketService {
  constructor(private readonly databaseService: DatabaseService) {}

  async saveCustomerBasket(CustomerBasketDto: CustomerBasketDto) {
    const { basket_id, customer_id, product, quantity, purchase_date, total_amount, payment_method } = CustomerBasketDto;

    // Format purchase_date to the required format
    const formattedPurchaseDate = format(
      new Date(purchase_date),
      "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX"
    );
    
    // SQL query for saving basket information
    const query = `INSERT INTO loyalty_program.tblbasketinfo(basket_id, customer_id, purchase_date, total_amount, payment_method)VALUES (?, ?, ?, ?, ?)`;

    try {
      return this.databaseService.query(query, [basket_id, customer_id, formattedPurchaseDate, total_amount, payment_method]);

    } catch (error) {
      throw new BadRequestException('Error saving customer basket: ' + error.message);
    }
  }

  // async saveCustomerBasketItems(saveBasketItemsDto: SaveBasketItemsDto) {
  //   const { basketId, customerId, product } = saveBasketItemsDto;
  //   const query = `INSERT INTO loyalty_program.tblbasketinfo_items(basket_id, customer_id, product, quantity, insertion_time)VALUES(?, ?, ?, ?, ?, ?)`;

  //   const insertionTime = format(
  //     new Date(),
  //     "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX"
  //   );

  //   try {
  //     return Promise.all(
  //       product.map(({ product, quantity, price }) =>
  //         this.databaseService.query(query, [basketId, customerId, product, quantity, price, insertionTime]),
  //       ),
  //     );
  //   } catch (error) {
  //     throw new BadRequestException('Error saving basket items: ' + error.message);
  //   }
  // }


  // async getProductPrices(products: string[]) {
  //   const query = `SELECT mstn.id, mstn.selling_incl_1, mstn.special_price_incl, COALESCE(inv.description_1, inv.description_2) AS description 
  //                   FROM loyalty_program.tblmultistoretrn mstn 
  //                   JOIN loyalty_program.tblinventory inv 
  //                   ON mstn.item_code = inv.item_code 
  //                   WHERE COALESCE(inv.description_1, inv.description_2) IN (?)`;

  //   try {
  //     return Promise.all(products.map((product) => this.databaseService.query(query, [product])));
  //   } catch (error) {
  //     throw new BadRequestException('Error fetching product prices: ' + error.message);
  //   }
  // }



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


  // async getProductSpecials(products: string[]) {
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
  //     return Promise.all(products.map((product) => this.databaseService.query(query, [product])));
  //   } catch (error) {
  //     throw new BadRequestException('Error fetching product specials: ' + error.message);
  //   }
  // }


  // async getProductCombinedSpecials(products: string[]) {
  //   const query = `SELECT 
  //                   sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id,
  //                   sp.start_date, sp.expiry_date, sp.special_value, sp.isActive,
  //                   spcg.special_group_id, spcg.product_description, spcg.special_price
  //                   FROM loyalty_program.tblspecials sp
  //                   JOIN loyalty_program.tblspecials_combinedgroup spcg 
  //                   ON sp.special_id = spcg.special_id
  //                   WHERE sp.special_type = 'Combined Special' 
  //                   AND sp.isActive = 1 
  //                   AND spcg.product_description IN (?) 
  //                   AND sp.start_date <= CURDATE() 
  //                   AND sp.expiry_date >= CURDATE()`;

  //   try {
  //     return this.databaseService.query(query, [products.join(',')]);
  //   } catch (error) {
  //     throw new BadRequestException('Error fetching combined product specials: ' + error.message);
  //   }
  // }

  // async saveFinalTransaction(finalTransactionDto: FinalTransactionDto) {
  //   const { basketId, customerId, purchasedProduct, quantity, productAmount, productDiscountedAmount, 
  //           totalBasketAmount, totalDiscBasketAmount, paymentMethod, purchaseDate } = finalTransactionDto;
    
  //   const query = `INSERT INTO loyalty_program.tblcompletetransaction 
  //                  (basket_id, customer_id, purchased_product, quantity, product_amount, 
  //                  product_discounted_amount, total_basket_amount, total_disc_basket_amount, 
  //                  payment_method, purchase_date)
  //                  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  //   try {
  //     return this.databaseService.query(query, [basketId, customerId, purchasedProduct, quantity, productAmount, 
  //                                               productDiscountedAmount, totalBasketAmount, totalDiscBasketAmount, 
  //                                               paymentMethod, purchaseDate]);
  //   } catch (error) {
  //     throw new BadRequestException('Error saving final transaction: ' + error.message);
  //   }
  // }
}