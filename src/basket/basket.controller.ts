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

  // @Post('savecustomerbasketitems')
  // async saveCustomerBasketItems(@Body() saveBasketItemsDto: SaveBasketItemsDto) {
  //   try {
  //     return await this.basketService.saveCustomerBasketItems(saveBasketItemsDto);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }

  // @Get('getproductprices/:product_description')
  // async getProductPrices(@Param('product_description') productDescription: string) {
  //   const products = productDescription.split(',');
  //   try {
  //     return await this.basketService.getProductPrices(products);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }

  // @Post('savecustomerbasketitems')
  // async saveCustomerBasketItems(@Body() saveBasketItemsDto: SaveBasketItemsDto) {
  //   try {
  //     return await this.basketService.saveCustomerBasketItems(saveBasketItemsDto);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }

  // @Get('checkloyalty/:CustomerID')
  // async checkLoyaltyCustomer(@Param('CustomerID') customerId: string) {
  //   try {
  //     return await this.basketService.checkLoyaltyCustomer(customerId);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }

  // @Post('savefinaltransaction')
  // async saveFinalTransaction(@Body() finalTransactionDto: FinalTransactionDto) {
  //   try {
  //     return await this.basketService.saveFinalTransaction(finalTransactionDto);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }
}
