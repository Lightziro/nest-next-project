import { Body, Controller, Post } from '@nestjs/common';
import { OrdersServices } from '../../services/order/orders.services';
import { CreateOrderDto } from '../../common/dto/order/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersServices) {}

  @Post()
  create(@Body() data: CreateOrderDto) {
    return this.ordersService.insert(data);
  }
}
