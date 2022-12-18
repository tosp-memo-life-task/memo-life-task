import { Test, TestingModule } from '@nestjs/testing';
import { RemoveEditorService } from './remove-editor.service';

describe('RemoveEditorService', () => {
  let service: RemoveEditorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveEditorService]
    }).compile();

    service = module.get<RemoveEditorService>(RemoveEditorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
