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
exports.UsersService = void 0;
const database_service_1 = require("../database/database.service");
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async SignUp(userDto) {
        const { emp_id, emp_name, emp_surname, id_no, username, role, phone_number, email_address } = userDto;
        const query = `INSERT INTO loyalty_program.user (emp_id, emp_name, emp_surname, id_no, username, role, phone_number, email_address)VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
        try {
            await this.databaseService.query(query, [
                emp_id,
                emp_name,
                emp_surname,
                id_no,
                username,
                role,
                phone_number,
                email_address
            ]);
            return { message: 'User Activity Logged Successfully' };
        }
        catch (error) {
            console.error('Error saving users information:', error.message);
            throw new common_1.BadRequestException('Error saving users information:');
        }
    }
    async SignIn(userDto) {
        const { username, password } = userDto;
        const query = `SELECT emp_id, emp_name, emp_surname, password, id_no, username, role, phone_number, email_address FROM loyalty_program.user WHERE username = ? AND password = ?`;
        try {
            return await this.databaseService.query(query, [username, password]);
        }
        catch (error) {
            console.error('No User was found with that username x id', error.message);
            throw new common_1.BadRequestException('No User was found with that username x id ' + error.message);
        }
    }
    async logUserActivity(userActivtyDto) {
        const { emp_id, emp_name, activity_id, activity, activity_type, time_logged, log_message } = userActivtyDto;
        const query = `INSERT INTO loyalty_program.tbllogs(emp_id, emp_name, activity_id, activity, activity_type, time_logged, log_message)VALUES(?, ?, ?, ?, ?, ?, ?)`;
        try {
            await this.databaseService.query(query, [
                emp_id,
                emp_name,
                activity_id,
                activity,
                activity_type,
                time_logged,
                log_message
            ]);
            return { message: 'User Activity Logged Successfully' };
        }
        catch (error) {
            console.error('Error logging users activity', error.message);
            throw new common_1.BadRequestException('Error logging users activity');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsersService);
//# sourceMappingURL=users.service.js.map