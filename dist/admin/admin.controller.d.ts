import { AdminService } from './admin.service';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto } from './dto/admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    saveSpecial(saveSpecialDto: SaveSpecialDto): Promise<import("mysql2").QueryResult>;
    getSpecialID(specialName: string): Promise<any>;
    saveSpecialItems(saveSpecialItemsDto: SaveSpecialItemsDto): Promise<import("mysql2").QueryResult>;
    saveCombinedSpecialItems(saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto): Promise<import("mysql2").QueryResult>;
}
//# sourceMappingURL=admin.controller.d.ts.map