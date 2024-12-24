import { BasketService } from './basket.service';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { Controller, Post, Get, Patch, Param, Body, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
import { CustomerBasketDto, SaveBasketItemsDto, FinalTransactionDto, BasketItemsDiscDto } from './dto/basket.dto';

@ApiTags('API') // Swagger tag
@Controller('basket')
export class BasketController {
    constructor(private readonly basketService: BasketService) {}

    /**
     * @swagger
     * POST /basket/savecustomerbasket
     * @summary Save basket information
     * @description Saves customer basket in the store loyalty system.
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
          card_number: { type: 'string', example: 961219820491, description: 'Customers card number' },
          product: { type: 'array', example: [], description: 'List of the products' },
          quantity: { type: 'integer', example: 3, description: 'Quantity of the products purchased' },
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

      /**
     * @swagger
     * GET /basket/fetch-product-prices/:product_description
     * @summary Fetch product prices
     * @description returns the prices of the purchased items
     * @tags API
     * @param {product_description} product_description - The Product Name
     * @returns A success message or error.
     */
    @Get('fetch-product-prices/:product_description')
    async fetchProductPrices(@Param('product_description') productDescription: string) {
        try {
            // Split the comma-separated string into an array
            const products = productDescription.split(',').map(item => item.trim());

            // Fetch product prices using the service method
            const productPrices = await this.basketService.fetchProductPrices(products);

            // Extract descriptions of items with prices
            const productsWithPrices = productPrices.map(product => product.description);

            // Identify products without prices
            const productsWithoutPrices = products.filter(product => !productsWithPrices.includes(product));

            // Generate the response message based on the results
            let message: string;
            if (productsWithPrices.length === 1) {
                message = `Prices returned for '${productsWithPrices[0]}'`;
            } else if (productsWithPrices.length > 1) {
                message = `Prices returned for '${productsWithPrices.join(', ')}', No prices were found for '${productsWithoutPrices.join(', ')}'`;
            } else {
                message = 'No prices were found for the requested items.';
            }

            // Return the response with the additional message
            return {
                message,
                productPrices
            };
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
            const loyaltyData = await this.basketService.checkLoyaltyCustomer(customerId); // Call the service to check loyalty customer data

            // Generate the message for the response
            const message = loyaltyData.length > 0
                ? "The customer has signed up for loyalty program"
                : "The customer has NOT signed up for loyalty program";

            // Return the response with the additional message
            return {
                message,
                loyaltyData
            };
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
          const normal_specials = await this.basketService.checkProductSpecials(products);

          // Extract product descriptions that have specials
          const productsWithSpecials = normal_specials.map(special => special.product_description);

          // Generate the message based on the results
          let message: string;
          if (productsWithSpecials.length === 1) {
              message = `Normal Specials found for the item '${productsWithSpecials[0]}'`;

          } else if (productsWithSpecials.length > 1) {
            const productWithoutSpecials = products.filter(product => !productsWithSpecials.includes(product));
              message = `Normal Specials found for the item(s) '${productsWithSpecials.join(', ')}', No specials were found for the item(s) '${productWithoutSpecials.join(', ')}'`;
          } else {
              message = 'No Normal Specials were found for the purchased item(s).';
          }

          // Return the response with the additional message
          return {
              message,
              normal_specials
          };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get('check-combined-specials/:product_description')
    async checkCombinedSpecials(@Param('product_description') productDescription: string) {
      try {
          // Split the comma-separated string into an array
          const products = productDescription.split(',').map(item => item.trim());
          const combined_specials = await this.basketService.checkCombinedSpecials(products);

          // Extract product descriptions that have combined-specials
          const productsWithSpecials = combined_specials.map(special => special.product_description);

          // Generate the message based on the results
          let message: string;
          if (productsWithSpecials.length === 1) {
              const productWithoutSpecials = products.filter(product => !productsWithSpecials.includes(product));
              message = `The item '${productsWithSpecials[0]}' is linked to a combined special but no specials were found for the items '${productWithoutSpecials.join(', ')}'`;

          } else if (productsWithSpecials.length > 1) {
            const productWithoutSpecials = products.filter(product => !productsWithSpecials.includes(product));
              message = `The items '${productsWithSpecials.join(', ')}' are linked to a combined special but no specials were found for the items '${productWithoutSpecials.join(', ')}'`;
          } else {
              message = 'No Combined Specials were found for the purchased item(s).';
          }

          // Return the response with the additional message
          return {
              message,
              combined_specials
          };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Patch('update-basket-disc-prices')
    async updateBasketItemsDisc(@Body() basketItemsDiscDtos: BasketItemsDiscDto[]) {
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