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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_dto_1 = require("./dto/admin.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async saveSpecial(saveSpecialDto) {
        return this.adminService.saveSpecial(saveSpecialDto);
    }
    async getSpecialID(specialName) {
        return this.adminService.getSpecialID(specialName);
    }
    async saveSpecialItems(saveSpecialItemsDto) {
        return this.adminService.saveSpecialItems(saveSpecialItemsDto);
    }
    async saveCombinedSpecialItems(saveCombinedSpecialItemsDto) {
        return this.adminService.saveCombinedSpecialItems(saveCombinedSpecialItemsDto);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('/savespecial'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveSpecialDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveSpecial", null);
__decorate([
    (0, common_1.Get)('/getspecialid/:special_name'),
    __param(0, (0, common_1.Param)('special_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSpecialID", null);
__decorate([
    (0, common_1.Post)('/savespecialitems'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveSpecialItemsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveSpecialItems", null);
__decorate([
    (0, common_1.Post)('/savecombinedspecialitems'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.SaveCombinedSpecialItemsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveCombinedSpecialItems", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map