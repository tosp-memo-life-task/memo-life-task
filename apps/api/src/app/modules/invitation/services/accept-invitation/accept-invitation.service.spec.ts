import { Test, TestingModule } from '@nestjs/testing';
import { AcceptInvitationService } from './accept-invitation.service';

describe('AcceptInvitationService', () => {
  let service: AcceptInvitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcceptInvitationService]
    }).compile();

    service = module.get<AcceptInvitationService>(AcceptInvitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
