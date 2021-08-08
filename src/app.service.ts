import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fridge } from './fridge.entity';
import { Order } from './order.entity';

@Injectable()
export class AppService {
    fridge: Fridge;
    constructor(@InjectRepository(Order) private ordersRepository: Repository<Order>, @InjectRepository(Fridge) private fridgeRepository: Repository<Fridge>) {
    }

    stockFridge(): Repository<Fridge> {
        this.fridgeRepository.create({
            corn: 3,
            peppers: 3,
            mushrooms: 3,
            olives: 3
        })
        this.fridge = {
            id: 1,
            corn: 3,
            peppers: 3,
            mushrooms: 3,
            olives: 3
        }
        return this.fridgeRepository;
    }

    getFridge(): Fridge {
        return this.fridge;
    }

    async takeFromFridge(newFridge: Fridge): Promise<Fridge> {
        return this.fridgeRepository.save(newFridge);
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

    createOrder(toppings: string, status: number): Promise<Order> {
        const newOrder = this.ordersRepository.create({
            toppings: toppings,
            status: status
        });
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
}
