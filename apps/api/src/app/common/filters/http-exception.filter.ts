import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common';
import { Response } from 'express';

import { ErrorRes } from '@memo-life-task/dtos';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  async catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse() as {
      code: string;
      args: object;
    } & Response;

    const res = new ErrorRes();
    res.code = exceptionResponse.code ?? 'exception.COMMON.UNHANDLED';
    res.info = exceptionResponse.code ? undefined : exceptionResponse;
    res.message = exception.message;

    response.status(statusCode).json(res);
  }
}
