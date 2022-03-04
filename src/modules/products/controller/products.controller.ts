import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from '../service/products.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    try {
      return this.productService.findAll();
    } catch (error) {}
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    try {
      return this.productService.create(payload);
    } catch (error) {
      throw error;
    }
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    try {
      return this.productService.findOne(productId);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    try {
      return this.productService.updateOne(id, payload);
    } catch (error) {
      throw error;
    }
  }
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.productService.deleteOne(id);
    } catch (error) {
      throw error;
    }
  }
}
