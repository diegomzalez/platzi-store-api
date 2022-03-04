import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './modules/orders/module/orders.module';
import { UserModule } from './modules/users/module/users.module';
import { CustomerModule } from './modules/customers/module/customers.module';
import { CategoryModule } from './modules/categories/module/categories.module';
import { ProductModule } from './modules/products/module/products.module';
import { BrandModule } from './modules/brands/module/brands.module';

@Module({
  imports: [
    OrderModule,
    UserModule,
    CustomerModule,
    CategoryModule,
    ProductModule,
    BrandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
