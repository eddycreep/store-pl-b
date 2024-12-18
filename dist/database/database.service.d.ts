import { OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
export declare class DatabaseService implements OnModuleInit {
    private pool;
    constructor();
    query(sql: string, params: any[]): Promise<mysql.QueryResult>;
    onModuleInit(): Promise<void>;
}
//# sourceMappingURL=database.service.d.ts.map