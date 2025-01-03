import { format } from "date-fns";
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UserDto, UserActivtyDto, CreateUserDto } from './dto/user.dto'
import { EntityManager, Repository } from 'typeorm';
import { Users } from './entities/user.entity'

import { InjectRepository } from '@nestjs/typeorm';
import { UsersActivity } from "./entities/user-activity.entity";

@Injectable()
export class UsersService {
    // Constructor injects the Items repository and EntityManager for database operations
    constructor(
        @InjectRepository(Users) private readonly itemsRepository: Repository<Users>, 
        @InjectRepository(UsersActivity) private readonly usersActivityRepository: Repository<UsersActivity>, 
        private readonly entityManager: EntityManager
    ) {}


    // Creates a new item using DTO and saves it to the database
    async SignUp(userDto: UserDto) {
        const item = new Users(userDto); // Creates a new Item instance from the DTO
        await this.entityManager.save(item); // Saves the item to the database using entity manager
    }

    async SignIn(username: string) {
        return this.itemsRepository.findOneBy({ username }); // Uses a where clause to find the item
    }

    async LogUserActivity(userActivtyDto: UserActivtyDto) {
        const activity = new UsersActivity(userActivtyDto); 
        
        await this.entityManager.save(activity);
    }
}