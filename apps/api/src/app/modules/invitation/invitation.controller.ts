import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { User } from '../../common/decorators/user.decorator';

import { CancelInvitationService } from './services/cancel-invitation/cancel-invitation.service';
import { ListInvitationsService } from './services/list-invitations/list-invitations.service';
import { RevokeInvitationService } from './services/revoke-invitation/revoke-invitation.service';
import { SendInvitationService } from './services/send-invitation/send-invitation.service';

import { ValidatedUserModel } from '../../common/models/validated-user.model';

import { SendInvitationRequestBody } from '@memo-life-task/dtos';

@Controller('invitation')
export class InvitationController {
  constructor(
    private readonly cancelInvitationService: CancelInvitationService,
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

  @Delete('cancel')
  async cancelInvitation(
    @Param() params: any,
    @User() validatedUser: ValidatedUserModel
  ) {
    return await this.cancelInvitationService.cancelInvitation(
      params,
      validatedUser
    );
  }

  @Delete(':id/revoke')
  async revokeInvitation(
    @Param() params: any,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.revokeInvitationService.revokeInvitation(
      params,
      validatedUser
    );
  }
}
