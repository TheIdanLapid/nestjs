import { Injectable } from '@nestjs/common';
import { Ingredient } from './ingredient';
import { Inventory } from './inventory';
import { Order } from './order';

@Injectable()
export class Kitchen {
    inventory: Inventory;
    orders: Order[]
    constructor(inventory: Inventory, orders: Order[]) {
        this.inventory = inventory;
        this.orders = orders;
    }
    checkInventory(ing: Ingredient): boolean {
        if (this.inventory.decrease(ing)) {
            return true;
        }
        return false;
    }

}
