import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';

@Injectable()
export class CategoryService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
  ];

  create(payload: CreateCategoryDto): Category {
    this.counterId += 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
  findAll() {
    return this.categories;
  }

  findOne(id: number): Category {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`category #${id} Not Found`);
    }
    return category;
  }

  updateOne(id: number, payload: UpdateCategoryDto): Category {
    const category = this.categories.find((item) => item.id === id);
    if (category) {
      const categoryIndex = this.categories.findIndex((item) => item.id);
      this.categories[categoryIndex] = {
        ...category,
        ...payload,
      };
      return this.categories[categoryIndex];
    }
    return null;
  }

  deleteOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} Not Found`);
    }
    const categoryIndex = this.categories.indexOf(category);
    return this.categories.splice(categoryIndex, 1);
  }
}
