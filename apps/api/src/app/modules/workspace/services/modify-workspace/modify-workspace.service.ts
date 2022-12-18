import { Injectable } from '@nestjs/common';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

import {
  ModifyWorkspaceRequestBody,
  ModifyWorkspaceRequestParams,
  ModifyWorkspaceResponse
} from '@memo-life-task/dtos';

@Injectable()
export class ModifyWorkspaceService {
  constructor() {}

  async modifyWorkspace(
    body: ModifyWorkspaceRequestBody,
    params: ModifyWorkspaceRequestParams,
    validatedUser: ValidatedUserModel
  ): Promise<ModifyWorkspaceResponse> {
    const res = new ModifyWorkspaceResponse();

    return res;
  }
}
