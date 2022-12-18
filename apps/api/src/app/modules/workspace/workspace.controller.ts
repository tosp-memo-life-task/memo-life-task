import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';

import { User } from '../../common/decorators/user.decorator';

import { CreateWorkspaceService } from './services/create-workspace/create-workspace.service';
import { DeleteWorkspaceService } from './services/delete-workspace/delete-workspace.service';
import { GetWorkspaceService } from './services/get-workspace/get-workspace.service';
import { ModifyWorkspaceService } from './services/modify-workspace/modify-workspace.service';

import { ValidatedUserModel } from '../../common/models/validated-user.model';

import {
  CreateWorkspaceRequestBody,
  CreateWorkspaceResponse,
  DeleteWorkspaceRequestParams,
  GetWorkspaceRequestParams,
  GetWorkspaceResponse,
  ModifyWorkspaceRequestBody,
  ModifyWorkspaceRequestParams,
  ModifyWorkspaceResponse
} from '@memo-life-task/dtos';

@Controller('workspace')
export class WorkspaceController {
  constructor(
    private readonly createWorkspaceService: CreateWorkspaceService,
    private readonly deleteWorkspaceService: DeleteWorkspaceService,
    private readonly getWorkspaceService: GetWorkspaceService,
    private readonly modifyWorkspaceService: ModifyWorkspaceService
  ) {}

  @Post()
  async createWorkspace(
    @Body() body: CreateWorkspaceRequestBody,
    @User() validatedUser: ValidatedUserModel
  ): Promise<CreateWorkspaceResponse> {
    return await this.createWorkspaceService.createWorkspace(
      body,
      validatedUser
    );
  }

  @Get(':id')
  async getWorkspace(
    @Param() params: GetWorkspaceRequestParams,
    @User() validatedUser: ValidatedUserModel
  ): Promise<GetWorkspaceResponse> {
    return await this.getWorkspaceService.getWorkspace(params, validatedUser);
  }

  @Patch(':id')
  async modifyWorkspace(
    @Body() body: ModifyWorkspaceRequestBody,
    @Param() params: ModifyWorkspaceRequestParams,
    @User() validatedUser: ValidatedUserModel
  ): Promise<ModifyWorkspaceResponse> {
    return await this.modifyWorkspaceService.modifyWorkspace(
      body,
      params,
      validatedUser
    );
  }

  @Delete(':id')
  async deleteWorkspace(
    @Param() params: DeleteWorkspaceRequestParams,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.deleteWorkspaceService.deleteWorkspace(
      params,
      validatedUser
    );
  }
}
