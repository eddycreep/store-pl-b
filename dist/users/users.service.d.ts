import { DatabaseService } from '../database/database.service';
import { UserDto, UserActivtyDto } from './dto/user.dto';
export declare class UsersService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    SignUp(userDto: UserDto): Promise<{
        message: string;
    }>;
    SignIn(userDto: UserDto): Promise<import("mysql2").QueryResult>;
    logUserActivity(userActivtyDto: UserActivtyDto): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=users.service.d.ts.map