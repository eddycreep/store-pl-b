import { Controller, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, UserActivtyDto } from './dto/user.dto';

@Controller('users') //decorator - handlers users routes
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('sign-up')
    async SIgnUp(@Body() userDto: UserDto){
        return this.usersService.SignUp(userDto);
    }

    @Get('sign-in')
    async SignIn(@Body() userDto: UserDto) {
        return this.usersService.SignIn(userDto);
    }

    @Post('log-user-activity')
    async logUserActivity(@Body() userActivtyDto: UserActivtyDto) {
        return this.usersService.logUserActivity(userActivtyDto);
    }
}