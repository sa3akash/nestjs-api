import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/post')
  postData(@Body() data: any) {
    this.appService.test(data);

    return {
      message: 'All Ok',
    };
  }
}
