import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { Order } from './order.entity';
import { FridgeModule } from './fridge/fridge.module';
import { Fridge } from './fridge.entity';

@Module({
    imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Order]), TypeOrmModule.forFeature([Fridge])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
