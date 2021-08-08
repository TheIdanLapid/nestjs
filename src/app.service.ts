import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../order.entity';

@Injectable()
export class AppService {
    constructor(@InjectRepository(Order) private ordersRepository: Repository<Order>) {
                
    }

    getAll(): Promise<Order[]> {
        return this.ordersRepository.find();
    }

    async getOneById(id: number): Promise<Order> {
        try {
            const order = await this.ordersRepository.findOneOrFail(id);
            return order;
        } catch (err) {
            // handle error
            console.log("No order number: " + id);
            throw err;
        }
        return;
    }

    createOrder(toppings: string): Promise<Order> {
        const newOrder = this.ordersRepository.create({ toppings });
        return this.ordersRepository.save(newOrder);
    }

    async updateOrder(id: number, toppings: string): Promise<Order> {
        const order = await this.getOneById(id);
        order.toppings = toppings;
        return this.ordersRepository.save(order);
    }

    async deleteOrder(id: number): Promise<Order> {
        const order = await this.getOneById(id);
        return this.ordersRepository.remove(order);
    }

  getHello(): string {
    return 'Hello World!';
  }
}
