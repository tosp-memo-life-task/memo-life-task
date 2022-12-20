import { Injectable } from '@nestjs/common';

import { InvitationRepository } from 'apps/api/src/app/database/repositories/invitation.repository';

import { InvitationEntity } from 'apps/api/src/app/database/entities/invitation.entity';
import { UserRepository } from 'apps/api/src/app/database/repositories/user.repository';
import { WorkspaceRepository } from 'apps/api/src/app/database/repositories/workspace.repository';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

import { SendInvitationRequestBody } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from 'apps/api/src/app/common/exceptions/common-database-error.exception';
import { UserNotFoundException } from 'apps/api/src/app/common/exceptions/user-not-found.exception';
import { WorkspaceNotFoundException } from 'apps/api/src/app/common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from 'apps/api/src/app/common/exceptions/workspace-unauthorized.exception';

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
    const sender = await this.userRepository
      .findOneOrFail({
        where: { id: validatedUser.id }
      })
      .catch(() => {
        throw new UserNotFoundException();
      });

    const workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: { owner: true },
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

    const invitation = new InvitationEntity();
    invitation.receiver = receiver;
    invitation.sender = sender;
    invitation.workspace = workspace;

    await this.invitationRepository.save(invitation).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
