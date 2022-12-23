import { Repository } from 'typeorm/repository/Repository';

import { CustomRepository } from '../../common/decorators/typeorm-ex.decorator';

import { UserEntity } from '../entities/user.entity';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
