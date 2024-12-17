import { Controller, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') //decorator - handlers users routes
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get() //get /users OR /user?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    // @Get()
    // getAllUsers(@Query('role' ))

    @Get(':id') //GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id) //+ to convert the param to a number because all parameters are strings
    }

    @Post() //POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id') //UPDATE /user/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id') //DELETE /user/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}