import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from '../service/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategories() {
    try {
      return this.categoryService.findAll();
    } catch (error) {}
  }

  @Post()
  createProduct(@Body() payload: CreateCategoryDto) {
    try {
      return this.categoryService.create(payload);
    } catch (error) {
      throw error;
    }
  }

  @Get(':categoryId')
  getProduct(@Param('categoryId', ParseIntPipe) categoryId: number) {
    try {
      return this.categoryService.findOne(categoryId);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    try {
      return this.categoryService.updateOne(id, payload);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.categoryService.deleteOne(id);
    } catch (error) {
      throw error;
    }
  }
}
