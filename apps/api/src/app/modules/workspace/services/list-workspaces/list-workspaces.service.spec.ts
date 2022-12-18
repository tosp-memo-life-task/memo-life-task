import { Test, TestingModule } from '@nestjs/testing';
import { ListWorkspacesService } from './list-workspaces.service';

describe('ListWorkspacesService', () => {
  let service: ListWorkspacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListWorkspacesService]
    }).compile();

    service = module.get<ListWorkspacesService>(ListWorkspacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
