import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTaskService } from './delete-task.service';

describe('DeleteTaskService', () => {
  let service: DeleteTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteTaskService]
    }).compile();

    service = module.get<DeleteTaskService>(DeleteTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
