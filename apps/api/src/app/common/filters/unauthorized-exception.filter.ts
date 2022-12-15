import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException
} from '@nestjs/common';
import { Response } from 'express';

import { ErrorRes } from '@memo-life-task/dtos';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  async catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse() as {
      code: string;
    } & Response;

    const res = new ErrorRes();
    res.code = exceptionResponse.code ?? 'exception.COMMON.UNAUTHORIZED';
    res.info = exceptionResponse.code ? undefined : exceptionResponse;
    res.message = exception.message;

    response.status(statusCode).json(res);
  }
}
