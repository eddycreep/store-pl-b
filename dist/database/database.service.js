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
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const mysql = require("mysql2/promise");
let DatabaseService = class DatabaseService {
    constructor() {
        this.pool = mysql.createPool({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            connectTimeout: 120000,
        });
    }
    async query(sql, params) {
        try {
            const [results] = await this.pool.execute(sql, params);
            return results;
        }
        catch (error) {
            console.error('Database query error:', {
                message: error.message,
                code: error.code,
                stack: error.stack,
            });
            throw error;
        }
    }
    async onModuleInit() {
        let attempts = 5;
        while (attempts > 0) {
            try {
                const connection = await this.pool.getConnection();
                console.log('Database has been connected successfully');
                connection.release();
                return;
            }
            catch (error) {
                console.error(`Failed to connect to database. Retries left: ${--attempts}`);
                if (attempts === 0)
                    throw error;
                await new Promise((res) => setTimeout(res, 2000));
            }
        }
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DatabaseService);
//# sourceMappingURL=database.service.js.map