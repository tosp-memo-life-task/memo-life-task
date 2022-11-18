import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import ormConfig from '../../../../ormconfig';

import { TypeOrmExModule } from '../../../../database/typeorm-ex.module';

import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';
import { SignInService } from './sign-in.service';

import { UserRepository } from '../../../../database/repositories/user.repository';

describe('SignInService', () => {
  let service: SignInService;

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
      providers: [
        ConfigService,
        JwtService,
        PasswordService,
        SignInService,
        TokenService
      ]
    }).compile();

    service = module.get<SignInService>(SignInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
