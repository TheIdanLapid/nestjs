import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';

@Module({
  controllers: [PizzaController]
})
export class PizzaModule {}
