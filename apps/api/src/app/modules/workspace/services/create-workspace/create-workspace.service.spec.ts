import { Test, TestingModule } from '@nestjs/testing';
import { CreateWorkspaceService } from './create-workspace.service';

describe('CreateWorkspaceService', () => {
  let service: CreateWorkspaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateWorkspaceService]
    }).compile();

    service = module.get<CreateWorkspaceService>(CreateWorkspaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
