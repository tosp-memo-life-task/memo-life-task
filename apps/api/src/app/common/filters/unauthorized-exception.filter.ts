import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException
} from '@nestjs/common';
import { Response } from 'express';

import { ErrorResponse } from '@memo-life-task/dtos';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  async catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse() as {
      code: string;
    } & Response;

    const res = new ErrorResponse();
    res.code = exceptionResponse.code ?? 'exception.COMMON.UNAUTHORIZED';
    res.info = exceptionResponse.code ? undefined : exceptionResponse;
    res.message = exception.message;

    response.status(statusCode).json(res);
  }
}
