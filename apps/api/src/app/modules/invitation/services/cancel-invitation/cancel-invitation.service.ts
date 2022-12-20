import { Injectable } from '@nestjs/common';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

@Injectable()
export class CancelInvitationService {
  async cancelInvitation(
    params: any,
    validatedUser: ValidatedUserModel
  ): Promise<void> {}
}
