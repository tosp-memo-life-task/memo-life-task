import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { ValidatedUserModel } from '../models/validated-user.model';

export const User = createParamDecorator(
  (
    data: ValidatedUserModel,
    executionContext: ExecutionContext
  ): ValidatedUserModel => {
    const request = executionContext.switchToHttp().getRequest();

    return request.user;
  }
);
