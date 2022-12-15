import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter
} from '@nestjs/common';
import { Response } from 'express';

import { ErrorRes } from '@memo-life-task/dtos';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  async catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse() as {
      code: string;
    } & Response;

    const res = new ErrorRes();
    res.code = exceptionResponse.code ?? 'exception.COMMON.BAD_REQUEST';
    res.info = exceptionResponse.code ? undefined : exceptionResponse;
    res.message = exception.message;

    response.status(statusCode).json(res);
  }
}
