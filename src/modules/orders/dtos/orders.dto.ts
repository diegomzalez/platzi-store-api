import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
