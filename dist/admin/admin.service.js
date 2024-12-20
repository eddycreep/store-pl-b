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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let AdminService = class AdminService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async saveSpecial(data) {
        const query = `INSERT INTO loyalty_program.tblspecials (special_name, special, special_type, store_id, start_date, expiry_date, special_value, isActive)VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        try {
            return await this.databaseService.query(query, Object.values(data));
        }
        catch (error) {
            console.error('Error saving special:', error.message);
            throw new common_1.BadRequestException('Unable to save special');
        }
    }
    async getSpecialID(specialName) {
        const query = `SELECT special_id FROM loyalty_program.tblspecials WHERE special_name = ?`;
        try {
            const result = await this.databaseService.query(query, [specialName]);
            if (!Array.isArray(result) || result.length === 0) {
                throw new common_1.NotFoundException('Special ID not found');
            }
            return result[0];
        }
        catch (error) {
            console.error('Error retrieving special ID:', error.message);
            throw error;
        }
    }
    async saveSpecialItems(saveSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecialitems (special_id, product_description, special_price)VALUES (?, ?, ?)`;
        try {
            return await this.databaseService.query(query, Object.values(saveSpecialItemsDto));
        }
        catch (error) {
            console.error('Error saving product special items:', error.message);
            throw new common_1.BadRequestException('Unable to save product special items');
        }
    }
    async saveCombinedSpecialItems(saveCombinedSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecials_combinedgroup (special_id, special_group_id, product_description, special_price)VALUES (?, ?, ?, ?)`;
        try {
            return await this.databaseService.query(query, Object.values(saveCombinedSpecialItemsDto));
        }
        catch (error) {
            console.error('Error saving combined special items:', error.message);
            throw new common_1.BadRequestException('Unable to save combined special items');
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AdminService);
//# sourceMappingURL=admin.service.js.map