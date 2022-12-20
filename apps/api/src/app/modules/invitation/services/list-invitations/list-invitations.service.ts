import { Injectable } from '@nestjs/common';

import { InvitationRepository } from '../../../../database/repositories/invitation.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import {
  InvitationResponse,
  ListInvitationsResponse,
  UserResponse,
  WorkspaceResponse
} from '@memo-life-task/dtos';

@Injectable()
export class ListInvitationsService {
  constructor(private readonly invitationRepository: InvitationRepository) {}

  async listInvitations(
    validatedUser: ValidatedUserModel
  ): Promise<ListInvitationsResponse> {
    const [invitations, count] = await this.invitationRepository.findAndCount({
      where: { receiver: { id: validatedUser.id } }
    });

    const invitationsRes = invitations.map((i) => {
      const sender = new UserResponse();
      sender.firstName = i.sender.nameFirst;
      sender.lastName = i.sender.nameLast;

      const workspace = new WorkspaceResponse();
      workspace.title = i.workspace.title;

      const invitation = new InvitationResponse();
      invitation.id = i.id;
      invitation.sender = sender;
      invitation.workspace = workspace;

      return invitation;
    });

    const res = new ListInvitationsResponse();
    res.count = count;
    res.invitations = invitationsRes;

    return res;
  }
}
