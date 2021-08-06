import { Module } from '@nestjs/common';
import { OrderController } from 'src/order/order.controller';
import { OrderModule } from 'src/order/order.module';
import { OrderService } from 'src/order/order.service';

@Module({
    imports: [OrderModule],
    providers: [OrderService],
    controllers: [OrderController]
})
export class OrderHttpModule {}
