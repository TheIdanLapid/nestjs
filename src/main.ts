import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Inventory } from './inventory';
import { Kitchen } from './kitchen';
import { Order } from './order';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    
    var inventory: Inventory;
    var orders: Order[];

    const kitchen: Kitchen = new Kitchen(inventory, orders);

    var stdin = process.openStdin();
    console.log("Hi! Welcome to Tomer's Pizza Place!");
    console.log("Please enter the toppings of your choosing: 1 for peppers, 2 for corn, 3 for mushrooms, 4 for olives");
    stdin.addListener("data", function (d) {
        kitchen
        console.log("You chose: [" +
            d.toString().trim() + "]");
    });
    stdin.addListener("data", function (d) {
        // note:  d is an object, and when converted to a string it will
        // end with a linefeed.  so we (rather crudely) account for that  
        // with toString() and then trim() 
        console.log("You chose: [" +
            d.toString().trim() + "]");
    });
}
bootstrap();
