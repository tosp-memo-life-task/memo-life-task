import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';

import { User } from '../../common/decorators/user.decorator';

import { CreateWorkspaceService } from './services/create-workspace/create-workspace.service';
import { DeleteWorkspaceService } from './services/delete-workspace/delete-workspace.service';
import { ModifyWorkspaceService } from './services/modify-workspace/modify-workspace.service';

import { ValidatedUserModel } from '../../common/models/validated-user.model';

import {
  CreateWorkspaceRequest,
  CreateWorkspaceResponse,
  DeleteWorkspaceRequest
} from '@memo-life-task/dtos';

@Controller('workspace')
export class WorkspaceController {
  constructor(
    private readonly createWorkspaceService: CreateWorkspaceService,
    private readonly deleteWorkspaceService: DeleteWorkspaceService,
    private readonly modifyWorkspaceService: ModifyWorkspaceService
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

  @Delete()
  async deleteWorkspace(
    @Body() req: DeleteWorkspaceRequest,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.deleteWorkspaceService.deleteWorkspace(
      req,
      validatedUser
    );
  }

  @Patch()
  async modifyWorkspace(
    @Body() req: any,
    @User() validatedUser: ValidatedUserModel
  ): Promise<any> {
    return await this.modifyWorkspaceService.modifyWorkspace(
      req,
      validatedUser
    );
  }
}
