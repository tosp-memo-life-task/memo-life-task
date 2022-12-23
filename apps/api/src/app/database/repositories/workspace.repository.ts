import { Repository } from 'typeorm/repository/Repository';

import { CustomRepository } from '../../common/decorators/typeorm-ex.decorator';

import { WorkspaceEntity } from '../entities/workspace.entity';

@CustomRepository(WorkspaceEntity)
export class WorkspaceRepository extends Repository<WorkspaceEntity> {}
