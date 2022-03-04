import { Module } from '@nestjs/common';
import { CategoryController } from '../controller/categories.controller';
import { CategoryService } from '../service/categories.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
