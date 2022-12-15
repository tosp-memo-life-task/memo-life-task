import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { WorkspaceController } from './workspace.controller';

import { CreateWorkspaceService } from './services/create-workspace/create-workspace.service';
import { DeleteWorkspaceService } from './services/delete-workspace/delete-workspace.service';
import { ModifyWorkspaceService } from './services/modify-workspace/modify-workspace.service';

import { WorkspaceRepository } from '../../database/repositories/workspace.repository';

@Module({
  controllers: [WorkspaceController],
  imports: [TypeOrmExModule.forCustomRepository([WorkspaceRepository])],
  providers: [
    CreateWorkspaceService,
    DeleteWorkspaceService,
    ModifyWorkspaceService
  ]
})
export class WorkspaceModule {}
