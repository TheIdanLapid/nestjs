import { Controller, Get, Logger } from '@nestjs/common';
import { Order } from '../order.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Order> {
      return this.appService.createOrder("mushrooms");
  }
}
