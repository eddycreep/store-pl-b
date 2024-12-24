import { OnModuleInit } from '@nestjs/common';
export declare class DatabaseService implements OnModuleInit {
    private connection;
    onModuleInit(): Promise<void>;
    query(sql: string, params: any[]): Promise<any>;
    closeConnection(): Promise<void>;
}
//# sourceMappingURL=database.service.d.ts.map