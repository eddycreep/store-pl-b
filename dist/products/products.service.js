"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const common_2 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getProducts() {
        const query = `SELECT mst.id, mst.item_code, mst.selling_incl_1, mst.special_price_incl, inv.description_1 FROM loyalty_program.tblmultistoretrn mst JOIN loyalty_program.tblinventory inv ON mst.item_code = inv.item_code`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching products:', error.message);
            throw new common_2.BadRequestException('Error fetching products: ' + error.message);
        }
    }
    async getActiveProductSpecials() {
        const query = `
            SELECT sp.special_id, sp.special, sp.special_type, sp.store_id, 
                    sp.start_date, sp.expiry_date, sp.special_value, sp.isActive, 
                    spi.product_description, spi.special_price
            FROM loyalty_program.tblspecials sp
            JOIN loyalty_program.tblspecialitems spi 
            ON sp.special_id = spi.special_id
            WHERE sp.special_type = 'Special' 
            AND sp.isActive = 1 
            AND sp.start_date <= CURDATE() 
            AND sp.expiry_date >= CURDATE();
        `;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching active product specials:', error.message);
            throw new common_2.BadRequestException('Error fetching active product specials: ' + error.message);
        }
    }
    async getUpcomingProductSpecials() {
        const query = `
        SELECT sp.special_id, sp.special, sp.special_type, sp.store_id, 
                sp.start_date, sp.expiry_date, sp.special_value, sp.isActive, 
                spi.product_description, spi.special_price
        FROM loyalty_program.tblspecials sp
        JOIN loyalty_program.tblspecialitems spi 
        ON sp.special_id = spi.special_id
        WHERE sp.special_type = 'Special' 
            AND sp.isActive = 1 
            AND sp.start_date >= CURDATE()
        `;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching upcoming product specials:', error.message);
            throw new common_2.BadRequestException('Error fetching upcoming product specials: ' + error.message);
        }
    }
    async getActiveCombinedSpecials() {
        const query = `
            SELECT sp.special_id, sp.special, sp.special_type, sp.store_id, sp.start_date, sp.expiry_date, sp.special_value, sp.isActive, scg.product_description, scg.special_price
            FROM loyalty_program.tblspecials sp
            JOIN loyalty_program.tblspecials_combinedgroup scg 
            ON sp.special_id = scg.special_id
            WHERE sp.special_type = 'Combined Special' 
            AND sp.isActive = 1 
            AND sp.start_date <= CURDATE() 
            AND sp.expiry_date >= CURDATE()
        `;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching active combined specials:', error.message);
            throw new common_2.BadRequestException('Error fetching active combined specials: ' + error.message);
        }
    }
    async getUpcomingCombinedSpecials() {
        const query = `
            SELECT sp.special_id, sp.special, sp.special_type, sp.store_id, sp.start_date, sp.expiry_date, sp.special_value, sp.isActive, scg.product_description, scg.special_price
            FROM loyalty_program.tblspecials sp
            JOIN loyalty_program.tblspecials_combinedgroup scg 
            ON sp.special_id = scg.special_id
            WHERE sp.special_type = 'Combined Special' 
            AND sp.isActive = 1 
            AND sp.start_date >= CURDATE()
        `;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching upcoming combined specials:', error.message);
            throw new common_2.BadRequestException('Error fetching upcoming combined specials: ' + error.message);
        }
    }
    async getAllProductSpecials() {
        const query = `SELECT sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id, 
        sp.start_date, sp.expiry_date, sp.special_value, sp.isActive, 
        spi.product_description, spi.special_price 
        FROM loyalty_program.tblspecials sp
        JOIN loyalty_program.tblspecialitems spi
        ON sp.special_id = spi.special_id 
        WHERE sp.special_type = "Special"`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching all product specials:', error.message);
            throw new common_2.BadRequestException('Error fetching all product specials: ' + error.message);
        }
    }
    async getAllCombinedSpecials() {
        const query = `
            SELECT sp.special_id, sp.special_name, sp.special, sp.special_type, sp.store_id, 
            sp.start_date, sp.expiry_date, sp.special_value, sp.isActive, 
            scg.special_group_id, scg.product_description, scg.special_price 
            FROM loyalty_program.tblspecials sp
            JOIN loyalty_program.tblspecials_combinedgroup scg 
            ON sp.special_id = scg.special_id 
            WHERE sp.special_type = "Combined Special"`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching all combined specials:', error.message);
            throw new common_2.BadRequestException('Error fetching all combined specials: ' + error.message);
        }
    }
    async getAllActiveSpecials() {
        const query = `SELECT special_id, special_name, special, special_type, store_id, start_date, expiry_date, special_value, isActive FROM loyalty_program.tblspecials WHERE isActive = 1 AND start_date <= CURDATE() AND expiry_date >= CURDATE()`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching all active specials:', error.message);
            throw new common_2.BadRequestException('Error fetching all active specials: ' + error.message);
        }
    }
    async getAllUpcomingSpecials() {
        const query = `SELECT special_id, special_name, special, special_type, store_id, start_date, expiry_date, special_value, isActive FROM loyalty_program.tblspecials WHERE isActive = 1 AND start_date >= CURDATE()`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching upcoming specials:', error.message);
            throw new common_2.BadRequestException('Error fetching upcoming specials: ' + error.message);
        }
    }
    async getActiveRewards() {
        const query = `SELECT reward_id, reward_title, description, reward, reward_type, reward_price, store_id, region, start_date, expiry_date, loyalty_tier, age_group, isActive FROM loyalty_program.tblrewards WHERE isActive = 1 AND start_date <= CURDATE() AND expiry_date >= CURDATE()`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching active rewards:', error.message);
            throw new common_2.BadRequestException('Error fetching active rewards: ' + error.message);
        }
    }
    async getUpcomingRewards() {
        const query = `SELECT reward_id, reward_title, description, reward, reward_type, reward_price, store_id, region, start_date, expiry_date, loyalty_tier, age_group, isActive FROM loyalty_program.tblrewards WHERE isActive = 1 AND start_date >= CURDATE()`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching upcoming rewards:', error.message);
            throw new common_2.BadRequestException('Error fetching upcoming rewards: ' + error.message);
        }
    }
    async getActiveSurveys() {
        const query = `SELECT survey_id, survey_title, survey_category, store_id, region, loyalty_tier, start_date, expiry_date, isActive FROM loyalty_program.tblsurvey WHERE isActive = 1 AND start_date <= CURDATE() AND expiry_date >= CURDATE()`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching active surveys:', error.message);
            throw new common_2.BadRequestException('Error fetching active surveys: ' + error.message);
        }
    }
    async getUpcomingSurveys() {
        const query = `SELECT survey_id, survey_title, survey_category, store_id, region, loyalty_tier, start_date, expiry_date, isActive FROM loyalty_program.tblsurvey WHERE isActive = 1 AND start_date >= CURDATE()`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching upcoming surveys:', error.message);
            throw new common_2.BadRequestException('Error fetching upcoming surveys: ' + error.message);
        }
    }
    async getStores() {
        const query = `SELECT id, code, description, address_1, address_2, address_3, address_4, address_5, address_6 FROM loyalty_program.tblmultistore`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching stores:', error.message);
            throw new common_2.BadRequestException('Error fetching stores: ' + error.message);
        }
    }
    async getCustomers() {
        const query = `SELECT ID, Code, Description, Address01, Address02, Address03, Address04, Address05, Address06, Address07, birth_day FROM loyalty_program.tblcustomers`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching customers:', error.message);
            throw new common_2.BadRequestException('Error fetching customers: ' + error.message);
        }
    }
    async getLoyaltyCustomers() {
        const query = `SELECT CustomerID, FirstName, LastName, MobileNumber, Age, Gender, Birthday, Ethnicity, EmploymentStatus, Email, LoyaltyTier FROM loyalty_program.tblloyaltycustomers`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching loyalty customers:', error.message);
            throw new common_2.BadRequestException('Error fetching loyalty customers: ' + error.message);
        }
    }
    async getLoyaltyTiers() {
        const query = `SELECT * FROM loyalty_program.tblloyaltytiers`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching loyalty tiers:', error.message);
            throw new common_2.BadRequestException('Error fetching loyalty tiers: ' + error.message);
        }
    }
    async getAgeGroups() {
        const query = `SELECT * FROM loyalty_program.tblage_groups`;
        try {
            return await this.databaseService.query(query, null);
        }
        catch (error) {
            console.error('Error fetching age groups:', error.message);
            throw new common_2.BadRequestException('Error fetching age groups: ' + error.message);
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ProductsService);
//# sourceMappingURL=products.service.js.map