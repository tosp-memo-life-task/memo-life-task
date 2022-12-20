import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from '../../common/decorators/user.decorator';

import { SendInvitationService } from './services/send-invitation/send-invitation.service';

import { ValidatedUserModel } from '../../common/models/validated-user.model';

import { SendInvitationRequestBody } from '@memo-life-task/dtos';

@Controller('invitation')
export class InvitationController {
  constructor(private readonly sendInvitationService: SendInvitationService) {}

  @Post()
  async sendInvitation(
    @Body() body: SendInvitationRequestBody,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.sendInvitationService.sendInvitation(body, validatedUser);
  }
}
