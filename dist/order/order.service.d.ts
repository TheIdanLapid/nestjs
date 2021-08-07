import { Order } from './order.entity';
import { Connection } from "typeorm";
export declare class OrderService {
    private connection;
    constructor(connection: Connection);
    createMany(orders: Order[]): Promise<void>;
}
