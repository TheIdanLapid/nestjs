import { Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Fridge } from './fridge.entity';
import { Order } from './order.entity';
import { Ingredients } from './topping';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  async start(): Promise<Order[]> {
      const order = await this.appService.createOrder("mushrooms", 1);
      return this.appService.getAll();
    }

    @Post()
    async decreaseIngredient(topping: string) {
        var fridge: Fridge = this.appService.getFridge();
        switch (topping) {
            case "peppers":
                fridge.peppers--;
                break;
            case "corn":
                fridge.corn--;
                break;
            case "mushrooms":
                fridge.mushrooms--;
                break;
            case "olives":
                fridge.olives--;
                break;
            default:
                break;
        }
        //build a new fridge:
        const newFridge = new Fridge();
        await this.appService.takeFromFridge(this.appService.getFridge());
    }

}
