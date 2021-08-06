import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [OrderModule, PizzaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
