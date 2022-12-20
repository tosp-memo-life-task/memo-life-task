import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray } from 'class-validator';

import { IListWorkspacesResponse } from '@memo-life-task/interfaces';

import { WorkspaceResponse } from '../workspace.response';

export class ListWorkspacesResponse implements IListWorkspacesResponse {
  @ApiProperty()
  @IsArray({ each: true })
  @Type(() => WorkspaceResponse)
  workspaces: Array<WorkspaceResponse> = new Array<WorkspaceResponse>();
}
