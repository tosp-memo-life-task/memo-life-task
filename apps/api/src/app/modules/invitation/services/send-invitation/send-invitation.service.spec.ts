import { Test, TestingModule } from '@nestjs/testing';
import { SendInvitationService } from './send-invitation.service';

describe('SendInvitationService', () => {
  let service: SendInvitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendInvitationService]
    }).compile();

    service = module.get<SendInvitationService>(SendInvitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
