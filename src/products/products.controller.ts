// import { Controller, Get } from '@nestjs/common';
// import { ProductsService } from './products.service';
// import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
// import { BadRequestException } from '@nestjs/common';

// @ApiTags('Products')
// @Controller('products')
// export class ProductsController {
    // constructor(private readonly productsService: ProductsService) {}

    // @Get('get-products')
    // async getProducts() {

    //     try {
    //         return await this.productsService.getProducts();

    //     } catch (error) {
    //         console.error('Error fetching products: ', error.message);
    //         throw new BadRequestException(error.message);
    //     }
    // }

    // @Get('get-active-product-specials')
    // @ApiOperation({ summary: 'Retrieve active product specials' })
    // async getActiveProductSpecials() {
    //     try {
    //         return await this.productsService.getActiveProductSpecials();
    //     } catch (error) {
    //         throw new BadRequestException(error.message);
    //     }
    // }

    // @Get('get-upcoming-product-specials')
    // @ApiOperation({ summary: 'Retrieve upcoming product specials' })
    // async getUpcomingProductSpecials() {
    //     try {
    //         return await this.productsService.getUpcomingProductSpecials();
    //     } catch (error) {
    //         throw new BadRequestException(error.message);
    //     }
    // }


    // @Get('get-active-combined-specials')
    // @ApiOperation({ summary: 'Retrieve active combined product specials' })
    // async getActiveCombinedSpecials() {
    //     try {
    //         return await this.productsService.getActiveCombinedSpecials();
    //     } catch (error) {
    //         throw new BadRequestException(error.message);
    //     }
    // }


    // @Get('get-upcoming-combined-specials')
    // @ApiOperation({ summary: 'Retrieve upcoming combined product specials' })
    // async getUpcomingCombinedSpecials() {
    //     try {
    //         return await this.productsService.getUpcomingCombinedSpecials();
    //     } catch (error) {
    //         throw new BadRequestException(error.message);
    //     }
    // }

    // @Get('get-all-product-specials')
    // @ApiOperation({ summary: 'Retrieve all product specials' })
    // @ApiResponse({ status: 200, description: 'List of all product specials.' })
    // async getAllProductSpecials() {
    //     return await this.productsService.getAllProductSpecials();
    // }

    // @Get('get-all-combined-specials')
    // @ApiOperation({ summary: 'Retrieve all combined specials' })
    // @ApiResponse({ status: 200, description: 'List of all combined specials.' })
    // async getAllCombinedSpecials() {
    //     return await this.productsService.getAllCombinedSpecials();
    // }

    // @Get('get-all-active-specials')
    // @ApiOperation({ summary: 'Retrieve all active specials' })
    // @ApiResponse({ status: 200, description: 'List of all active specials.' })
    // async getAllActiveSpecials() {
    //     return await this.productsService.getAllActiveSpecials();
    // }

    // @Get('get-all-upcoming-specials')
    // @ApiOperation({ summary: 'Retrieve all upcoming specials' })
    // @ApiResponse({ status: 200, description: 'List of all upcoming specials.' })
    // async getUpcomingSpecials() {
    //     return await this.productsService.getAllUpcomingSpecials();
    // }

    // //REWARDS

    // @Get('get-active-rewards')
    // @ApiOperation({ summary: 'Retrieve active rewards' })
    // @ApiResponse({ status: 200, description: 'List of all active rewards.' })
    // async getActiveRewards() {
    //     return await this.productsService.getActiveRewards();
    // }

    // @Get('get-upcoming-rewards')
    // @ApiOperation({ summary: 'Retrieve upcoming rewards' })
    // @ApiResponse({ status: 200, description: 'List of all upcoming rewards.' })
    // async getUpcomingRewards() {
    //     return await this.productsService.getUpcomingRewards();
    // }

    // @Get('get-active-surveys')
    // @ApiOperation({ summary: 'Retrieve active surveys' })
    // @ApiResponse({ status: 200, description: 'List of active surveys.' })
    // async getActiveSurveys() {
    //     return await this.productsService.getActiveSurveys();
    // }

    // @Get('get-upcoming-surveys') 
    // @ApiOperation({ summary: 'Retrieve upcoming surveys' })
    // @ApiResponse({ status: 200, description: 'List of upcoming surveys.' })
    // async getUpcomingSurveys() {
    //     return await this.productsService.getUpcomingSurveys();
    // }

    // @Get('get-stores') 
    // @ApiOperation({ summary: 'Retrieve stores' })
    // @ApiResponse({ status: 200, description: 'List of stores.' })
    // async getStores() {
    //     return await this.productsService.getStores();
    // }

    // @Get('get-customers')
    // @ApiOperation({ summary: 'Retrieve customers' })
    // @ApiResponse({ status: 200, description: 'List of customers.' })
    // async getCustomers() {
    //     return await this.productsService.getCustomers();
    // }

    // @Get('get-loyalty-customers')
    // @ApiOperation({ summary: 'Retrieve loyalty customers' })
    // @ApiResponse({ status: 200, description: 'List of loyalty customers.' })
    // async getLoyaltyCustomers() {
    //     return await this.productsService.getLoyaltyCustomers();
    // }


    // @Get('get-loyalty-tiers')
    // @ApiOperation({ summary: 'Retrieve loyalty Tiers' })
    // @ApiResponse({ status: 200, description: 'Loyalty Tiers.' })
    // async getLoyaltyTiers() {
    //     return await this.productsService.getLoyaltyTiers();
    // }


    // @Get('get-age-groups')
    // @ApiOperation({ summary: 'Retrieve Age Groups' })
    // @ApiResponse({ status: 200, description: 'Age Groups in which Specials/Rewards can be applied to.' })
    // async getAgeGroups() {
    //     return await this.productsService.getAgeGroups();
    // }
// }