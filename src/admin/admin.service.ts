import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@Injectable()
export class AdminService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getProducts() {
        const query = `SELECT mst.id, mst.item_code, mst.selling_incl_1, mst.special_price_incl, inv.description_1 FROM loyalty_program.tblmultistoretrn mst JOIN loyalty_program.tblinventory inv ON mst.item_code = inv.item_code`;

        try {
            // Pass `null` as the second argument for the parameters
            return await this.databaseService.query(query, null);
        } catch (error) {
            console.error('Error fetching products:', error.message);
            throw new BadRequestException('Error fetching products: ' + error.message);
        }
    }
}
