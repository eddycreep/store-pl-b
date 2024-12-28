import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<import("mysql2").QueryResult>;
    getActiveProductSpecials(): Promise<import("mysql2").QueryResult>;
    getUpcomingProductSpecials(): Promise<import("mysql2").QueryResult>;
    getActiveCombinedSpecials(): Promise<import("mysql2").QueryResult>;
    getUpcomingCombinedSpecials(): Promise<import("mysql2").QueryResult>;
    getAllProductSpecials(): Promise<import("mysql2").QueryResult>;
    getAllCombinedSpecials(): Promise<import("mysql2").QueryResult>;
    getAllActiveSpecials(): Promise<import("mysql2").QueryResult>;
    getUpcomingSpecials(): Promise<import("mysql2").QueryResult>;
    getActiveRewards(): Promise<import("mysql2").QueryResult>;
    getUpcomingRewards(): Promise<import("mysql2").QueryResult>;
    getActiveSurveys(): Promise<import("mysql2").QueryResult>;
    getUpcomingSurveys(): Promise<import("mysql2").QueryResult>;
    getStores(): Promise<import("mysql2").QueryResult>;
    getCustomers(): Promise<import("mysql2").QueryResult>;
    getLoyaltyCustomers(): Promise<import("mysql2").QueryResult>;
    getLoyaltyTiers(): Promise<import("mysql2").QueryResult>;
    getAgeGroups(): Promise<import("mysql2").QueryResult>;
}
//# sourceMappingURL=products.controller.d.ts.map