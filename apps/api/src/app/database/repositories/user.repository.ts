import { Repository } from 'typeorm/repository/Repository';

import { CustomRepository } from '../../common/decorators/typeorm-ex.decorator';

import { User } from '../entities/user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {}
