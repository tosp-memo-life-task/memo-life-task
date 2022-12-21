import { Test, TestingModule } from '@nestjs/testing';
import { DeclineInvitationService } from './decline-invitation.service';

describe('CancelInvitationService', () => {
  let service: DeclineInvitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeclineInvitationService]
    }).compile();

    service = module.get<DeclineInvitationService>(DeclineInvitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
