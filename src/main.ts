import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Ingredient } from './ingredient';
import { Inventory } from './inventory';
import { Kitchen } from './kitchen';
import { Mushrooms } from './mushrooms';
import { Order } from './order';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    
    var m: Mushrooms;
    var inventory: Inventory;
    var orders: Order[];

    inventory.setToppings([m, m]);
    const kitchen: Kitchen = new Kitchen(inventory, orders);

    var stdin = process.openStdin();
    console.log("Hi! Welcome to Tomer's Pizza Place!");
    console.log("Please enter the toppings of your choosing: p for peppers, c for corn, m for mushrooms, o for olives");
    stdin.addListener("data", function (d) {
        if (kitchen.checkInventory(d)) {
            console.log("You chose: " +
                d.toString().trim() + ". Anything else? [y/n]");
        }
        else {
            console.log("So sorry! We're out of " + Ingredient[d.toString().trim()]+". Choose a different topping please...")
        }

    });
    stdin.addListener("data", function (d) {
        if (d.toString().trim() === 'n') {
            //SEND ORDER!
        }
        while (d.toString().trim() === 'y') { 
            stdin.addListener("data", function (d) {
                if (kitchen.checkInventory(d)) {
                    console.log("You chose: " +
                        d.toString().trim() + ". Anything else? [y/n]");
                }
                else {
                    console.log("So sorry! We're out of " + Ingredient[d.toString().trim()] + ". Choose a different topping please...")
                }
            });
        }
        console.log("You chose: [" +
            d.toString().trim() + "]");
    });
}
bootstrap();
