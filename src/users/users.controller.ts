import { Controller, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') //decorator - handlers users routes
export class UsersController {
    // @Get() //get /users
    // findAll() {
    //     return []
    // }

    constructor(private readonly usersService: UsersService) {}

    @Get() //get /users OR /user?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id) //+ to convert the param to a number because all parameters are strings
    }

    @Post() //POST /users
    create(@Body() user: { name: string; email: string; role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        return this.usersService.create(user);
    }

    @Patch(':id') //UPDATE /user/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(':id') //DELETE /user/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id)
    }
}
