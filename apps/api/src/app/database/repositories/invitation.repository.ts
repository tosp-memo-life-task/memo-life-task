import { Repository } from 'typeorm/repository/Repository';

import { CustomRepository } from '../../common/decorators/typeorm-ex.decorator';

import { InvitationEntity } from '../entities/invitation.entity';

@CustomRepository(InvitationEntity)
export class InvitationRepository extends Repository<InvitationEntity> {}
