import { IUserResponse } from '../user/user.response';
import { IWorkspaceResponse } from '../workspace/workspace.response';

export interface IInvitationResponse {
  id: number;
  sender: IUserResponse;
  receiver: IUserResponse;
  workspace?: IWorkspaceResponse;
}
