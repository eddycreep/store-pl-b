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

  
  // @Get('checkloyalty/:CustomerID')
  // async checkLoyaltyCustomer(@Param('CustomerID') customerId: string) {
  //   try {
  //     return await this.basketService.checkLoyaltyCustomer(customerId);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }
  
}