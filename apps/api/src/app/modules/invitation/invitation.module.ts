import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { InvitationController } from './invitation.controller';

import { AcceptInvitationService } from './services/accept-invitation/accept-invitation.service';
import { DeclineInvitationService } from './services/decline-invitation/decline-invitation.service';
import { ListInvitationsService } from './services/list-invitations/list-invitations.service';
import { RevokeInvitationService } from './services/revoke-invitation/revoke-invitation.service';
import { SendInvitationService } from './services/send-invitation/send-invitation.service';

import { InvitationRepository } from '../../database/repositories/invitation.repository';
import { UserRepository } from '../../database/repositories/user.repository';
import { WorkspaceRepository } from '../../database/repositories/workspace.repository';

@Module({
  controllers: [InvitationController],
  imports: [
    TypeOrmExModule.forCustomRepository([
      InvitationRepository,
      UserRepository,
      WorkspaceRepository
    ])
  ],
  providers: [
    AcceptInvitationService,
    DeclineInvitationService,
    ListInvitationsService,
    RevokeInvitationService,
    SendInvitationService
  ]
})
export class InvitationModule {}
