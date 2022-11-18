import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import ormConfig from '../../ormconfig';

import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { AuthenticationController } from './authentication.controller';

import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './services/password/password.service';
import { SignInService } from './services/sign-in/sign-in.service';
import { SignUpService } from './services/sign-up/sign-up.service';
import { TokenService } from './services/token/token.service';

import { UserRepository } from '../../database/repositories/user.repository';

describe('AuthenticationController', () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
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
        SignUpService,
        TokenService
      ]
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
