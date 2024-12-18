"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
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
    }
    findAll(role) {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0)
                throw new common_2.NotFoundException('User role not found');
            return rolesArray;
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        if (!user)
            throw new common_2.NotFoundException('User not found');
        return user;
    }
    create(CreateUserDto) {
        const usersByHighestID = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestID[0].id + 1,
            ...CreateUserDto
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...UpdateUserDto };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map