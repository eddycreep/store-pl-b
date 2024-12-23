import { Controller, Post, Get, Patch, Param, Body, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CustomerBasketDto, SaveBasketItemsDto, FinalTransactionDto, BasketItemsDiscDto } from './dto/basket.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Basket') // Swagger tag
@Controller('basket')
export class BasketController {
    constructor(private readonly basketService: BasketService) {}

    /**
     * @swagger
     * POST /basket/savecustomerbasket
     * @summary Save basket information
     * @description Adds customer basket in the store loyalty system.
     * @tags API
     * @param {CustomerBasketDto} CustomerBasketDto - The basket data to save.
     * @returns A success message or error.
     */
    @Post('savecustomerbasket')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Save basket information', description: 'Adds customer basket in the store loyalty system.' })
    @ApiBody({
      description: 'Customer Basket Data',
      schema: {
        type: 'object',
        properties: {
          basket_id: { type: 'integer', example: 101, description: 'ID of the basket' },
          customer_id: { type: 'integer', example: 202, description: 'ID of the customer' },
          product: { type: 'array', example: [], description: 'Name of the products' },
          quantity: { type: 'integer', example: 3, description: 'Quantity of the product purchased' },
          purchase_date: { type: 'string', example: '2023-10-14 13:25:00', description: 'Date of the purchased basket' },
          total_amount: { type: 'number', example: 45.99, description: 'Total basket amount' },
          payment_method: { type: 'string', example: 'Cash', description: 'Payment method of the basket' },
        },
      },
    })
    @ApiResponse({
      status: 200,
      description: 'Basket information successfully saved',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Success' },
          data: {
            type: 'object',
            properties: {
              basket_id: { type: 'integer' },
              customer_id: { type: 'integer' },
              product: { type: 'array' },
              quantity: { type: 'integer' },
              purchase_date: { type: 'string' },
              total_amount: { type: 'number' },
              payment_method: { type: 'string' },
            },
          },
        },
      },
    })
    @ApiResponse({
      status: 500,
      description: 'Internal server error',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Failed' },
          error: { type: 'string', description: 'Error details' },
        },
      },
    })
    async saveCustomerBasket(@Body() customerBasketDto: CustomerBasketDto) {
      return this.basketService.saveCustomerBasket(customerBasketDto);
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
    async checkCombinedSpecials(@Param('product_description') productDescription: string) {
        try {
            // Split the comma-separated string into an array
            const products = productDescription.split(',').map(item => item.trim());
            return await this.basketService.checkCombinedSpecials(products);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Patch('update-basket-disc-prices')
    async updateBasketItemsDisc(
      @Body() basketItemsDiscDtos: BasketItemsDiscDto[]
    ) {
      try {
        return await this.basketService.updateBasketItemsDisc(basketItemsDiscDtos);
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