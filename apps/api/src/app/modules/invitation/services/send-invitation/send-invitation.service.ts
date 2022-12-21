import { Injectable } from '@nestjs/common';

import { InvitationRepository } from '../../../../database/repositories/invitation.repository';

import { InvitationEntity } from '../../../../database/entities/invitation.entity';
import { UserRepository } from '../../../../database/repositories/user.repository';
import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { SendInvitationRequestBody } from '@memo-life-task/dtos';

import { InvitationForbiddenException } from '../../../../common/exceptions/invitation-forbidden.exception';
import { UserNotFoundException } from '../../../../common/exceptions/user-not-found.exception';
import { WorkspaceNotFoundException } from '../../../../common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';
import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';

@Injectable()
export class SendInvitationService {
  constructor(
    private readonly invitationRepository: InvitationRepository,
    private readonly userRepository: UserRepository,
    private readonly workspaceRepository: WorkspaceRepository
  ) {}

  async sendInvitation(
    body: SendInvitationRequestBody,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const isAlreadyInvited = await this.invitationRepository.findOne({
      where: {
        receiver: { email: body.email },
        sender: { id: validatedUser.id },
        workspace: { id: body.workspaceId }
      }
    });

    if (isAlreadyInvited) throw new InvitationForbiddenException();

    const sender = await this.userRepository
      .findOneOrFail({
        where: { id: validatedUser.id }
      })
      .catch(() => {
        throw new UserNotFoundException();
      });

    const workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: { owner: true, editors: true },
        where: { id: body.workspaceId }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    if (workspace.owner.id !== sender.id)
      throw new WorkspaceUnauthroziedException();

    const receiver = await this.userRepository
      .findOneOrFail({
        where: { email: body.email }
      })
      .catch(() => {
        throw new UserNotFoundException();
      });

    if (workspace.editors.findIndex((u) => u.id === receiver.id) !== -1)
      throw new InvitationForbiddenException();

    const invitation = new InvitationEntity();
    invitation.receiver = receiver;
    invitation.sender = sender;
    invitation.workspace = workspace;

    await this.invitationRepository.save(invitation).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
