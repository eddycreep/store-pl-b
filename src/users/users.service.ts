import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users =  [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            role: "ADMIN"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "ENGINEER"
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            role: "INTERN"
        },
        {
            id: 4,
            name: "Bob Brown",
            email: "bob.brown@example.com",
            role: "Engineer"
        },
        {
            id: 5,
            name: "Charlie Wilson",
            email: "charlie.wilson@example.com",
            role: "Admin"
        }
    ];
    
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);

            if (rolesArray.length === 0) throw new NotFoundException('User role not found')
            return rolesArray;
        }

        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);

        if (!user) throw new NotFoundException('User not found')

        return user
    }

    create(CreateUserDto: CreateUserDto) {
        const usersByHighestID = [...this.users].sort((a, b) => b.id - a.id)

        const newUser = {
            id: usersByHighestID[0].id + 1,
            ...CreateUserDto
        }

        this.users.push(newUser);
        return newUser;
    }

    update(id: number, UpdateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => { 
            if (user.id === id) {
                return {...user,...UpdateUserDto}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser;
    }
}
