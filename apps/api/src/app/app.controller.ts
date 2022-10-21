import { Body, Controller, Get, Post } from '@nestjs/common';

import { Message, RegisterUserRequest } from '@memo-life-task/dtos';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('register')
  registerTest(@Body() req: RegisterUserRequest): any {
    return req;
  }
}
