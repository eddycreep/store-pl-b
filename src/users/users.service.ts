import { format } from "date-fns";
import { DatabaseService } from '../database/database.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UserDto, UserActivtyDto } from './dto/user.dto'


@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) {}

    async SignUp(userDto: UserDto) {
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
        } catch (error) {
            console.error('Error saving users information:', error.message);
            throw new BadRequestException('Error saving users information:');
        }
    }

    // get user using username x password
    async SignIn(userDto: UserDto) {
        const{ username, password } = userDto;

        const query = `SELECT emp_id, emp_name, emp_surname, password, id_no, username, role, phone_number, email_address FROM loyalty_program.user WHERE username = ? AND password = ?`;

        try {
            // Explicitly pass only the required parameters
            return await this.databaseService.query(query, [username, password]);
        } catch (error) {
            console.error('No User was found with that username x id', error.message);
            throw new BadRequestException('No User was found with that username x id ' + error.message);
        }
    }

    // log user
    async logUserActivity(userActivtyDto: UserActivtyDto) {
        const { emp_id, emp_name, activity_id, activity, activity_type, time_logged, log_message } = userActivtyDto;
    
        const query = `INSERT INTO loyalty_program.tbllogs(emp_id, emp_name, activity_id, activity, activity_type, time_logged, log_message)VALUES(?, ?, ?, ?, ?, ?, ?)`;

        try {
            // Save user info to the database
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
        } catch (error) {
            console.error('Error logging users activity', error.message);
            throw new BadRequestException('Error logging users activity');
        }
    }
}
