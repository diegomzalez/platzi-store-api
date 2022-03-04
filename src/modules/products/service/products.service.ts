import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla, bla',
      price: 250,
      image: '',
      stock: 12,
    },
  ];

  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} Not Found`);
    }
    return product;
  }

  updateOne(id: number, payload: UpdateProductDto) {
    const product = this.products.find((item) => item.id === id);
    if (product) {
      const productIndex = this.products.findIndex((item) => item.id);
      this.products[productIndex] = {
        ...product,
        ...payload,
      };
      return this.products[productIndex];
    }
    return null;
  }

  deleteOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} Not Found`);
    }
    const productIndex = this.products.indexOf(product);
    return this.products.splice(productIndex, 1);
  }
}
