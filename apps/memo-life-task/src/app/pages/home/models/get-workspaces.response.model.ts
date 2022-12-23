import { IWorkspaceResponse } from '@memo-life-task/interfaces';

export class GetWorkspacesResponseModel {
  owned: IWorkspaceResponse[];
  sharedWithMe: IWorkspaceResponse[];
}
