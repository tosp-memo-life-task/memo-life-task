import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import ormConfig from '../../../../ormconfig';

import { TypeOrmExModule } from '../../../../database/typeorm-ex.module';

import { TokenService } from './token.service';

import { UserRepository } from '../../../../database/repositories/user.repository';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async () => {
            return {
              ...ormConfig,
              autoLoadEntities: true
            };
          }
        }),
        TypeOrmExModule.forCustomRepository([UserRepository])
      ],
      providers: [ConfigService, JwtService, TokenService]
    }).compile();

    service = module.get<TokenService>(TokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
