import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto, UpdateSpecialDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
    constructor(private readonly databaseService: DatabaseService) {}

    async saveSpecial(data: SaveSpecialDto) {
        const query = `INSERT INTO loyalty_program.tblspecials (special_name, special, special_type, store_id, start_date, expiry_date, special_value, isActive)VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        try {
            return await this.databaseService.query(query, Object.values(data));
        } catch (error) {
            console.error('Error saving special:', error.message);
            throw new BadRequestException('Unable to save special');
        }
    }

    async getSpecialID(specialName: string) {
        const query = `SELECT special_id FROM loyalty_program.tblspecials WHERE special_name = ?`;
    
        try {
            const result: any = await this.databaseService.query(query, [specialName]);
    
            // Ensure `result` is an array (typical for SELECT queries)
            if (!Array.isArray(result) || result.length === 0) {
                throw new NotFoundException('Special ID not found');
            }
    
            return result[0];
        } catch (error) {
            console.error('Error retrieving special ID:', error.message);
            throw error;
        }
    }
    

    async saveSpecialItems(saveSpecialItemsDto: SaveSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecialitems (special_id, product_description, special_price)VALUES (?, ?, ?)`;
        
        try {
            return await this.databaseService.query(query, Object.values(saveSpecialItemsDto));
        } catch (error) {
            console.error('Error saving product special items:', error.message);
            throw new BadRequestException('Unable to save product special items');
        }
    }

    async saveCombinedSpecialItems(saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto) {
        const query = `INSERT INTO loyalty_program.tblspecials_combinedgroup (special_id, special_group_id, product_description, special_price)VALUES (?, ?, ?, ?)`;

        try {
            return await this.databaseService.query(query, Object.values(saveCombinedSpecialItemsDto));
        } catch (error) {
            console.error('Error saving combined special items:', error.message);
            throw new BadRequestException('Unable to save combined special items');
        }
    }
}