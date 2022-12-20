import { Test, TestingModule } from '@nestjs/testing';
import { ListInvitationsService } from './list-invitations.service';

describe('ListInvitationsService', () => {
  let service: ListInvitationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListInvitationsService]
    }).compile();

    service = module.get<ListInvitationsService>(ListInvitationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
