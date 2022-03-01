import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './modules/orders/controller/orders.controller';
import { OrderModule } from './modules/orders/module/orders.module';
import { OrderService } from './modules/orders/service/orders.service';
import { UserController } from './modules/users/controller/users.controller';
import { UserModule } from './modules/users/module/users.module';
import { UserService } from './modules/users/service/users.service';
import { CustomerController } from './modules/customers/controller/customers.controller';
import { CustomerModule } from './modules/customers/module/customers.module';
import { CustomerService } from './modules/customers/service/customers.service';
import { CategoryController } from './modules/categories/controller/categories.controller';
import { CategoryModule } from './modules/categories/module/categories.module';
import { CategoryService } from './modules/categories/service/categories.service';
import { ProductController } from './modules/products/controller/products.controller';
import { ProductModule } from './modules/products/module/products.module';
import { ProductService } from './modules/products/service/products.service';
import { BrandController } from './modules/brands/controller/brands.controller';
import { BrandModule } from './modules/brands/module/brands.module';
import { BrandService } from './modules/brands/service/brands.service';

@Module({
  imports: [
    OrderModule,
    UserModule,
    CustomerModule,
    CategoryModule,
    ProductModule,
    BrandModule,
  ],
  controllers: [
    AppController,
    OrderController,
    UserController,
    CustomerController,
    CategoryController,
    ProductController,
    BrandController,
  ],
  providers: [
    AppService,
    OrderService,
    UserService,
    CustomerService,
    CategoryService,
    ProductService,
    BrandService,
  ],
})
export class AppModule {}
