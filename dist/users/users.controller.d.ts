import { UsersService } from './users.service';
import { UserDto, UserActivtyDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    SignUp(userDto: UserDto): Promise<void>;
    SignIn(username: string): Promise<import("./entities/user.entity").Users>;
    LogUserActivity(userActivtyDto: UserActivtyDto): Promise<void>;
}
//# sourceMappingURL=users.controller.d.ts.map