import { WorkspaceResponse } from '@memo-life-task/dtos';

export class GetWorkspacesResponseModel {
  owned: WorkspaceResponse[];
  sharedWithMe: WorkspaceResponse[];
}
