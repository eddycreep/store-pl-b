import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CustomerBasketDto, ProductDto, SaveBasketItemsDto, FinalTransactionDto } from './dto/basket.dto';
import { BadRequestException } from '@nestjs/common';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post('savecustomerbasket')
  async saveCustomerBasket(@Body() CustomerBasketDto: CustomerBasketDto) {
    try {
      return await this.basketService.saveCustomerBasket(CustomerBasketDto);
      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('savecustomerbasketitems')
  async saveCustomerBasketItems(@Body() saveBasketItemsDto: SaveBasketItemsDto) {
    console.log('Received SaveBasketItemsDto:', saveBasketItemsDto); // Log the input
    try {
      return await this.basketService.saveCustomerBasketItems(saveBasketItemsDto);
    } catch (error) {
      console.error('Error in controller:', error.message);
      throw new BadRequestException(error.message);
    }
  }

  
  @Get('checkloyalty/:CustomerID')
  async checkLoyaltyCustomer(@Param('CustomerID') customerId: string) {
    try {
      // Call the service to check loyalty customer data
      return await this.basketService.checkLoyaltyCustomer(customerId);
    } catch (error) {
      // Handle and propagate any errors
      throw new BadRequestException(error.message);
    }
  }
  
  @Get('check-product-specials/:product_description')
  async checkProductSpecials(@Param('product_description') productDescription: string) {
      try {
          // Split the comma-separated string into an array
          const products = productDescription.split(',').map(item => item.trim());
          return await this.basketService.checkProductSpecials(products);
      } catch (error) {
          throw new BadRequestException(error.message);
      }
  }


  @Get('check-combined-specials/:product_description')
  async checkCombinedProductSpecials(@Param('product_description') productDescription: string) {
      try {
          // Split the comma-separated string into an array
          const products = productDescription.split(',').map(item => item.trim());
          return await this.basketService.checkCombinedProductSpecials(products);
      } catch (error) {
          throw new BadRequestException(error.message);
      }
  }


  @Get('fetch-product-prices/:product_description')
  async fetchProductPrices(@Param('product_description') productDescription: string) {
      try {
          // Split the comma-separated string into an array
          const products = productDescription.split(',').map(item => item.trim());
          return await this.basketService.fetchProductPrices(products);
      } catch (error) {
          throw new BadRequestException(error.message);
      }
  }
  
  @Post('save-final-transaction')
  async saveFinalTransaction(@Body() finalTransactionDto: FinalTransactionDto) {
    try {
      return await this.basketService.saveFinalTransaction(finalTransactionDto);
      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}