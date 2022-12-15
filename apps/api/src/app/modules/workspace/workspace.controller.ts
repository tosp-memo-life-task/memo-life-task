import {
  CreateWorkspaceRequest,
  CreateWorkspaceResponse
} from '@memo-life-task/dtos';
import { Body, Controller, Post } from '@nestjs/common';

import { User } from '../../common/decorators/user.decorator';

import { CreateWorkspaceService } from './services/create-workspace/create-workspace.service';

import { ValidatedUserModel } from '../../common/models/validated-user.model';

@Controller('workspace')
export class WorkspaceController {
  constructor(
    private readonly createWorkspaceService: CreateWorkspaceService
  ) {}

  @Post()
  async createWorkspace(
    @Body() req: CreateWorkspaceRequest,
    @User() validatedUser: ValidatedUserModel
  ): Promise<CreateWorkspaceResponse> {
    return await this.createWorkspaceService.createWorkspace(
      req,
      validatedUser
    );
  }
}
