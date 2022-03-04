import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dto/orders.dto';
@Injectable()
export class OrderService {
  private counterId = 1;
  private orders: Order[] = [
    {
      id: 1,
      name: 'Order 1',
    },
  ];

  create(payload: CreateOrderDto): Order {
    this.counterId += 1;
    const newOrder = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
  findAll() {
    return this.orders;
  }

  findOne(id: number): Order {
    const order = this.orders.find((item) => item.id === id);
    if (!order) {
      throw new NotFoundException(`Order #${id} Not Found`);
    }
    return order;
  }

  updateOne(id: number, payload: UpdateOrderDto): Order {
    const order = this.orders.find((item) => item.id === id);
    if (order) {
      const orderIndex = this.orders.findIndex((item) => item.id);
      this.orders[orderIndex] = {
        ...order,
        ...payload,
      };
      return this.orders[orderIndex];
    }
    return null;
  }

  deleteOne(id: number) {
    const order = this.orders.find((item) => item.id === id);
    if (!order) {
      throw new NotFoundException(`Order #${id} Not Found`);
    }
    const orderIndex = this.orders.indexOf(order);
    return this.orders.splice(orderIndex, 1);
  }
}
