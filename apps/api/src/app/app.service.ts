import { Injectable } from '@nestjs/common';
import { Message } from '@tosp-memo-life-task/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
