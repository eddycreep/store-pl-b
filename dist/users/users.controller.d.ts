import { UsersService } from './users.service';
import { UserDto, UserActivtyDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    SIgnUp(userDto: UserDto): Promise<{
        message: string;
    }>;
    SignIn(userDto: UserDto): Promise<import("mysql2").QueryResult>;
    logUserActivity(userActivtyDto: UserActivtyDto): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=users.controller.d.ts.map