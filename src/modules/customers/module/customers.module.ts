import { Module } from '@nestjs/common';
import { CustomerController } from '../controller/customers.controller';
import { CustomersService } from '../service/customers.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomerModule {}
