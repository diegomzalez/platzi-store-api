import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Put,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get()
  getProducts(
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  @Post()
  createProduct(@Body() payload: any) {
    return {
      message: 'Create Action',
      payload,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return {
      message: `productId: ${productId}`,
    };
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
