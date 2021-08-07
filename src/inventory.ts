import { Injectable } from '@nestjs/common';
import { Ingredient } from './ingredient';
import { Ingredients } from './topping';

@Injectable()
export class Inventory {
    ingredients: Ingredients[];
    decrease(ing: Ingredient): boolean {
        if (this.ingredients.includes(ing)) {
            this.ingredients.splice(this.ingredients.indexOf(ing, 1));
            return true;
        }
        return false;
    }
    setToppings(toppings: Ingredients[]) {
        this.ingredients = toppings;
    }
}
