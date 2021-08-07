import { Injectable } from '@nestjs/common';
import { Ingredient } from './ingredient';

@Injectable()
export class Inventory {
    ingredients: Ingredient[];
    decrease(ing: Ingredient): boolean {
        if (this.ingredients.includes(ing)) {
            this.ingredients.splice(this.ingredients.indexOf(ing, 1));
            return true;
        }
        return false;
    }
}
