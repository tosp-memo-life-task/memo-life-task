import { Injectable } from '@nestjs/common';

import { Message } from '@memo-life-task/dtos';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
