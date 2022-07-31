import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../../common/dto/order/create-order.dto';
import { Order } from 'src/common/entities/order.entity';

@Injectable()
export class OrdersServices {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async insert(data: CreateOrderDto): Promise<Order> {
    return await this.orderRepository.save(data);
  }
  async getById(id: number): Promise<Order> {
    return await this.orderRepository.findOneById(id);
  }
}
