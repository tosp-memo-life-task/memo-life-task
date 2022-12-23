import { IInvitationResponse } from '../invitation.response';

export interface IListInvitationsResponse {
  count: number;
  invitations: Array<IInvitationResponse>;
}
