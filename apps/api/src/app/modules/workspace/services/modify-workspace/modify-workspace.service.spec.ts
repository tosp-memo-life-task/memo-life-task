import { Test, TestingModule } from '@nestjs/testing';
import { ModifyWorkspaceService } from './modify-workspace.service';

describe('ModifyWorkspaceService', () => {
  let service: ModifyWorkspaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModifyWorkspaceService]
    }).compile();

    service = module.get<ModifyWorkspaceService>(ModifyWorkspaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
