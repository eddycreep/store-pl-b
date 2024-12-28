import { DatabaseService } from '../database/database.service';
export declare class ProductsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getProducts(): Promise<import("mysql2").QueryResult>;
    getActiveProductSpecials(): Promise<import("mysql2").QueryResult>;
    getUpcomingProductSpecials(): Promise<import("mysql2").QueryResult>;
    getActiveCombinedSpecials(): Promise<import("mysql2").QueryResult>;
    getUpcomingCombinedSpecials(): Promise<import("mysql2").QueryResult>;
    getAllProductSpecials(): Promise<import("mysql2").QueryResult>;
    getAllCombinedSpecials(): Promise<import("mysql2").QueryResult>;
    getAllActiveSpecials(): Promise<import("mysql2").QueryResult>;
    getAllUpcomingSpecials(): Promise<import("mysql2").QueryResult>;
    getActiveRewards(): Promise<import("mysql2").QueryResult>;
    getUpcomingRewards(): Promise<import("mysql2").QueryResult>;
    getActiveSurveys(): Promise<import("mysql2").QueryResult>;
    getUpcomingSurveys(): Promise<import("mysql2").QueryResult>;
    getStores(): Promise<import("mysql2").QueryResult>;
    getCustomers(): Promise<import("mysql2").QueryResult>;
    getLoyaltyCustomers(): Promise<import("mysql2").QueryResult>;
    getLoyaltyTiers(): Promise<import("mysql2").QueryResult>;
}
//# sourceMappingURL=products.service.d.ts.map