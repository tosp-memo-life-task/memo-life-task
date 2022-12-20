import { IInvitationResponse } from '../invitation/invitation.response';
import { ITaskResponse } from '../task/task.response';
import { IUserResponse } from '../user/user.response';

export interface IWorkspaceResponse {
  createdAt: Date;
  description: string;
  editors: Array<IUserResponse>;
  id: number;
  invitations: Array<IInvitationResponse>;
  isOwned: boolean;
  owner: IUserResponse;
  tasks: Array<ITaskResponse>;
  title: string;
  updatedAt: Date;
}
