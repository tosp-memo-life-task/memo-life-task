import { Injectable } from '@nestjs/common';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

@Injectable()
export class ModifyWorkspaceService {
  constructor() {}

  async modifyWorkspace(
    req: any,
    validatedUser: ValidatedUserModel
  ): Promise<any> {}
}
