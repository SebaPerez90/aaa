import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  getHello() {
    return 'Hello, this is the API of an e-commerce platform. Please visit the documentation for more information https://ecomerce-m4.onrender.com/api';
  }
}
