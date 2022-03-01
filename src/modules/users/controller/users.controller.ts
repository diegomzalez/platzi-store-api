import {
  Controller,
  Get,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
  Post,
  Body,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
  ) {
    return {
      message: `Products limit => ${limit} offset => ${offset}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create Action',
      payload,
    };
  }
}
