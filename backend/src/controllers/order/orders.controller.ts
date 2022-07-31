import { Body, Controller, Post } from '@nestjs/common';
import { OrdersServices } from '../../services/order/orders.services';
import { CreateOrderDto } from '../../common/dto/order/create-order.dto';
import { OrderMailServices } from '../../services/order/order-mail.services';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersServices,
    private readonly emailService: OrderMailServices,
  ) {}

  @Post()
  async create(@Body() data: CreateOrderDto) {
    const order = await this.ordersService.insert(data);
    this.emailService.notifyAboutOrder(order);
    return order;
  }
}
