import { DatabaseService } from '../database/database.service';
export declare class ProductsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getProducts(): Promise<any>;
    getActiveProductSpecials(): Promise<any>;
    getUpcomingProductSpecials(): Promise<any>;
    getActiveCombinedSpecials(): Promise<any>;
    getUpcomingCombinedSpecials(): Promise<any>;
    getAllProductSpecials(): Promise<any>;
    getAllCombinedSpecials(): Promise<any>;
    getAllActiveSpecials(): Promise<any>;
    getAllUpcomingSpecials(): Promise<any>;
    getActiveRewards(): Promise<any>;
    getUpcomingRewards(): Promise<any>;
    getActiveSurveys(): Promise<any>;
    getUpcomingSurveys(): Promise<any>;
    getStores(): Promise<any>;
    getCustomers(): Promise<any>;
    getLoyaltyCustomers(): Promise<any>;
}
//# sourceMappingURL=products.service.d.ts.map