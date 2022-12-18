import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { WorkspaceController } from './workspace.controller';

import { CreateWorkspaceService } from './services/create-workspace/create-workspace.service';
import { DeleteWorkspaceService } from './services/delete-workspace/delete-workspace.service';
import { GetWorkspaceService } from './services/get-workspace/get-workspace.service';
import { ListWorkspacesService } from './services/list-workspaces/list-workspaces.service';
import { ModifyWorkspaceService } from './services/modify-workspace/modify-workspace.service';

import { UserRepository } from '../../database/repositories/user.repository';
import { WorkspaceRepository } from '../../database/repositories/workspace.repository';
import { RemoveEditorService } from './services/remove-editor/remove-editor.service';

@Module({
  controllers: [WorkspaceController],
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository, WorkspaceRepository])
  ],
  providers: [
    CreateWorkspaceService,
    DeleteWorkspaceService,
    GetWorkspaceService,
    ListWorkspacesService,
    ModifyWorkspaceService,
    RemoveEditorService
  ]
})
export class WorkspaceModule {}
