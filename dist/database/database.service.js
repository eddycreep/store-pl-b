"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config({ path: (0, path_1.join)(__dirname, '..', '..', '..', '.env') });
let DatabaseService = class DatabaseService {
    async onModuleInit() {
        try {
            this.connection = await mysql.createConnection({
                host: process.env.HOST,
                port: Number(process.env.DB_PORT),
                user: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
            });
            console.log('DB connected successfully');
        }
        catch (error) {
            console.error('Error connecting to DB:', error.message);
            process.exit(1);
        }
    }
    async query(sql, params) {
        try {
            const [results] = await this.connection.execute(sql, params);
            return results;
        }
        catch (error) {
            console.error('Error executing query:', error.message);
            throw new Error('Database query failed');
        }
    }
    async closeConnection() {
        if (this.connection) {
            await this.connection.end();
            console.log('DB connection closed successfully');
        }
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map