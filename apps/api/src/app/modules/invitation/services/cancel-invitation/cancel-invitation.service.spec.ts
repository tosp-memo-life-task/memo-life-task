import { Test, TestingModule } from '@nestjs/testing';
import { CancelInvitationService } from './cancel-invitation.service';

describe('CancelInvitationService', () => {
  let service: CancelInvitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CancelInvitationService]
    }).compile();

    service = module.get<CancelInvitationService>(CancelInvitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
