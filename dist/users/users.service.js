"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const user_activity_entity_1 = require("./entities/user-activity.entity");
let UsersService = class UsersService {
    constructor(usersRepository, usersActivityRepository, entityManager) {
        this.usersRepository = usersRepository;
        this.usersActivityRepository = usersActivityRepository;
        this.entityManager = entityManager;
    }
    async SignUp(userDto) {
        const item = new user_entity_1.Users(userDto);
        await this.entityManager.save(item);
    }
    async SignIn(username) {
        return this.usersRepository.findOneBy({ username });
    }
    async LogUserActivity(userActivtyDto) {
        const activity = new user_activity_entity_1.UsersActivity(userActivtyDto);
        await this.entityManager.save(activity);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.Users)),
    __param(1, (0, typeorm_2.InjectRepository)(user_activity_entity_1.UsersActivity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.EntityManager])
], UsersService);
//# sourceMappingURL=users.service.js.map