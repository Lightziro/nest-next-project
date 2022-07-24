import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../common/entities/order.entity';
import { OrdersController } from '../../controllers/order/orders.controller';
import { OrdersServices } from '../../services/order/orders.services';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersServices],
})
export class OrdersModule {}
