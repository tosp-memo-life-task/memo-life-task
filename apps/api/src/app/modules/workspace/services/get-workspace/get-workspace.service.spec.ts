import { Test, TestingModule } from '@nestjs/testing';
import { GetWorkspaceService } from './get-workspace.service';

describe('GetWorkspaceService', () => {
  let service: GetWorkspaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetWorkspaceService]
    }).compile();

    service = module.get<GetWorkspaceService>(GetWorkspaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
