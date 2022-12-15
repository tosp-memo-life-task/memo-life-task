import { Test, TestingModule } from '@nestjs/testing';
import { DeleteWorkspaceService } from './delete-workspace.service';

describe('DeleteWorkspaceService', () => {
  let service: DeleteWorkspaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteWorkspaceService]
    }).compile();

    service = module.get<DeleteWorkspaceService>(DeleteWorkspaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
