import { Controller, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, UserActivtyDto, CreateUserDto } from './dto/user.dto';

@Controller('users') //decorator - handlers users routes
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // Endpoint to create a new item
    @Post('sign-up')
    async SignUp(@Body() userDto: UserDto) { // Extracts the request body
        return this.usersService.SignUp(userDto); // Calls the service to create the item
    }

    @Get(':id')
    async SignIn(@Param('username') username: string) { // Extracts the username from the route parameters
      return this.usersService.SignIn(username); // Calls the service to retrieve the item
    }


    @Post('log-user-activity')
    async LogUserActivity(@Body() userActivtyDto: UserActivtyDto) { // Extracts the request body
        return this.usersService.LogUserActivity(userActivtyDto); // Calls the service to create the item
    }
}