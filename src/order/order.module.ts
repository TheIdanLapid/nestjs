import { Module } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderSubscriber } from './order.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([Order])],
    providers: [OrderService,
        {
        provide: getRepositoryToken(Order),
        useValue: ordersMockRepo
    },
    OrderSubscriber],
    controllers: [OrderController],
  })

export class OrderModule {}
