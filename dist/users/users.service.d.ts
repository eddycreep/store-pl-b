import { UserDto, UserActivtyDto } from './dto/user.dto';
import { EntityManager, Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { UsersActivity } from "./entities/user-activity.entity";
export declare class UsersService {
    private readonly usersRepository;
    private readonly usersActivityRepository;
    private readonly entityManager;
    constructor(usersRepository: Repository<Users>, usersActivityRepository: Repository<UsersActivity>, entityManager: EntityManager);
    SignUp(userDto: UserDto): Promise<void>;
    SignIn(username: string): Promise<Users>;
    LogUserActivity(userActivtyDto: UserActivtyDto): Promise<void>;
}
//# sourceMappingURL=users.service.d.ts.map