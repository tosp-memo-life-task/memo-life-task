import { Test, TestingModule } from '@nestjs/testing';
import { ModifyTaskService } from './modify-task.service';

describe('ModifyTaskService', () => {
  let service: ModifyTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModifyTaskService]
    }).compile();

    service = module.get<ModifyTaskService>(ModifyTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
