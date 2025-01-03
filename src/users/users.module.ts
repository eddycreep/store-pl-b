import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { UsersActivity } from './entities/user-activity.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Users, UsersActivity])], // Registers the Item entity with TypeORM
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}