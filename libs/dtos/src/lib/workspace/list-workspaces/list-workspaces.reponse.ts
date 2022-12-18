import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray } from 'class-validator';

import { WorkspaceResponse } from '../workspace.response';

export class ListWorkspacesResponse {
  @ApiProperty()
  @IsArray({ each: true })
  @Type(() => WorkspaceResponse)
  workspaces: Array<WorkspaceResponse> = new Array<WorkspaceResponse>();
}
