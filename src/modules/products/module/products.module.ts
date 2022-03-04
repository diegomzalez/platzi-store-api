import { Module } from '@nestjs/common';
import { ProductController } from '../controller/products.controller';
import { ProductService } from '../service/products.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
