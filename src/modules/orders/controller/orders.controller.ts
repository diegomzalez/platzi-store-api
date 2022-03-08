import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { OrderService } from '../service/orders.service';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dto';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getOrders() {
    try {
      return this.orderService.findAll();
    } catch (error) {}
  }

  @Post()
  createOrder(@Body() payload: CreateOrderDto) {
    try {
      return this.orderService.create(payload);
    } catch (error) {
      throw error;
    }
  }

  @Get(':orderId')
  getOrder(@Param('orderId', ParseIntPipe) orderId: number) {
    try {
      return this.orderService.findOne(orderId);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  updateOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderDto,
  ) {
    try {
      return this.orderService.updateOne(id, payload);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  deleteOrder(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.orderService.deleteOne(id);
    } catch (error) {
      throw error;
    }
  }
}
