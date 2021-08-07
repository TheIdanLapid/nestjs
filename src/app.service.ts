import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../order.entity';

@Injectable()
export class AppService {
    constructor(@InjectRepository(Order) private ordersRepository: Repository<Order>) {
        
    }
  getHello(): string {
    return 'Hello World!';
  }
}
