import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { PizzaModule } from './pizza/pizza.module';
import { Order } from './order';
import { Inventory } from './inventory';
import { KitchenService } from './kitchen/kitchen.service';
import { InventoryService } from './inventory/inventory.service';
import { OrderService } from './order/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [OrderModule, PizzaModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService, Order, Inventory, KitchenService, InventoryService, OrderService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
