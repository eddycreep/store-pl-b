"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketModule = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
const basket_controller_1 = require("./basket.controller");
const database_service_1 = require("../database/database.service");
const event_emitter_1 = require("@nestjs/event-emitter");
let BasketModule = class BasketModule {
};
exports.BasketModule = BasketModule;
exports.BasketModule = BasketModule = __decorate([
    (0, common_1.Module)({
        imports: [event_emitter_1.EventEmitterModule.forRoot()],
        controllers: [basket_controller_1.BasketController],
        providers: [basket_service_1.BasketService, database_service_1.DatabaseService],
    })
], BasketModule);
//# sourceMappingURL=basket.module.js.map