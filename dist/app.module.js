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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const order_module_1 = require("./order/order.module");
const pizza_module_1 = require("./pizza/pizza.module");
const order_1 = require("./order");
const inventory_1 = require("./inventory");
const kitchen_service_1 = require("./kitchen/kitchen.service");
const inventory_service_1 = require("./inventory/inventory.service");
const order_service_1 = require("./order/order.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_http_module_1 = require("./order-http/order-http.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [order_module_1.OrderModule, pizza_module_1.PizzaModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db',
                entities: ['dist/src/**/*.entity.js'],
                synchronize: true
            }), order_http_module_1.OrderHttpModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, order_1.Order, inventory_1.Inventory, kitchen_service_1.KitchenService, inventory_service_1.InventoryService, order_service_1.OrderService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map