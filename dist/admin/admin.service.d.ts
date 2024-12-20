import { DatabaseService } from '../database/database.service';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto } from './dto/admin.dto';
export declare class AdminService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    saveSpecial(data: SaveSpecialDto): Promise<import("mysql2").QueryResult>;
    getSpecialID(specialName: string): Promise<any>;
    saveSpecialItems(saveSpecialItemsDto: SaveSpecialItemsDto): Promise<import("mysql2").QueryResult>;
    saveCombinedSpecialItems(saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto): Promise<import("mysql2").QueryResult>;
}
//# sourceMappingURL=admin.service.d.ts.map