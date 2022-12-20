import { Injectable } from '@nestjs/common';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

@Injectable()
export class ListInvitationsService {
  constructor() {}

  async listInvitations(validatedUser: ValidatedUserModel) {}
}
