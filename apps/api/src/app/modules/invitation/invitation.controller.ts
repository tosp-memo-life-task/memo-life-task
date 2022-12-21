import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { User } from '../../common/decorators/user.decorator';

import { AcceptInvitationService } from './services/accept-invitation/accept-invitation.service';
import { DeclineInvitationService } from './services/decline-invitation/decline-invitation.service';
import { ListInvitationsService } from './services/list-invitations/list-invitations.service';
import { RevokeInvitationService } from './services/revoke-invitation/revoke-invitation.service';
import { SendInvitationService } from './services/send-invitation/send-invitation.service';

import { ValidatedUserModel } from '../../common/models/validated-user.model';

import {
  AcceptInvitationRequestParams,
  DeclineInvitationRequestParams,
  RevokeInvitationRequestBody,
  SendInvitationRequestBody
} from '@memo-life-task/dtos';

@Controller('invitation')
export class InvitationController {
  constructor(
    private readonly acceptInvitationService: AcceptInvitationService,
    private readonly declineInvitationService: DeclineInvitationService,
    private readonly listInvitationsService: ListInvitationsService,
    private readonly revokeInvitationService: RevokeInvitationService,
    private readonly sendInvitationService: SendInvitationService
  ) {}

  @Post()
  async sendInvitation(
    @Body() body: SendInvitationRequestBody,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.sendInvitationService.sendInvitation(body, validatedUser);
  }

  @Get('list')
  async listInvitations(
    @User() validatedUser: ValidatedUserModel
  ): Promise<any> {
    return await this.listInvitationsService.listInvitations(validatedUser);
  }

  @Delete(':id/decline')
  async declineInvitation(
    @Param() params: DeclineInvitationRequestParams,
    @User() validatedUser: ValidatedUserModel
  ) {
    return await this.declineInvitationService.declineInvitation(
      params,
      validatedUser
    );
  }

  @Delete('revoke')
  async revokeInvitation(
    @Body() body: RevokeInvitationRequestBody,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.revokeInvitationService.revokeInvitation(
      body,
      validatedUser
    );
  }

  @Post(':id/accept')
  async acceptInvitation(
    @Param() params: AcceptInvitationRequestParams,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.acceptInvitationService.acceptInvitation(
      params,
      validatedUser
    );
  }
}
