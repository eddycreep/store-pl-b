import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<any>;
    getActiveProductSpecials(): Promise<any>;
    getUpcomingProductSpecials(): Promise<any>;
    getActiveCombinedSpecials(): Promise<any>;
    getUpcomingCombinedSpecials(): Promise<any>;
    getAllProductSpecials(): Promise<any>;
    getAllCombinedSpecials(): Promise<any>;
    getAllActiveSpecials(): Promise<any>;
    getUpcomingSpecials(): Promise<any>;
    getActiveRewards(): Promise<any>;
    getUpcomingRewards(): Promise<any>;
    getActiveSurveys(): Promise<any>;
    getUpcomingSurveys(): Promise<any>;
    getStores(): Promise<any>;
    getCustomers(): Promise<any>;
    getLoyaltyCustomers(): Promise<any>;
}
//# sourceMappingURL=products.controller.d.ts.map