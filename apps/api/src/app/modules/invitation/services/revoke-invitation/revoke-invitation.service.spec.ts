import { Test, TestingModule } from '@nestjs/testing';
import { RevokeInvitationService } from './revoke-invitation.service';

describe('RevokeInvitationService', () => {
  let service: RevokeInvitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevokeInvitationService]
    }).compile();

    service = module.get<RevokeInvitationService>(RevokeInvitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
