import { Injectable } from '@nestjs/common';

import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';

import { UserRepository } from '../../../../database/repositories/user.repository';

import { UserEntity } from '../../../../database/entities/user.entity';

import { SignUpRequestBody, SignUpResponse } from '@memo-life-task/dtos';

import { UserAlreadySignedUpException } from 'apps/api/src/app/common/exceptions/user-already-signed-up.exception';

@Injectable()
export class SignUpService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userRepository: UserRepository
  ) {}

  async signUp(body: SignUpRequestBody): Promise<SignUpResponse> {
    const profileWithEmail = await this.userRepository.findOne({
      where: { email: body.email }
    });

    if (profileWithEmail) throw new UserAlreadySignedUpException();

    const salt = await this.passwordService.genSalt();
    const password = await this.passwordService.genPass(body.password, salt);

    const bgColor = Math.floor(Math.random() * 16777215).toString(16);

    let user = new UserEntity();
    user.email = body.email;
    user.nameFirst = body.firstName;
    user.nameLast = body.lastName;
    user.password = password;
    user.pfp = `https://ui-avatars.com/api/?background=${bgColor}&color=fff?name=${body.firstName}+${body.lastName}`;
    user.salt = salt;

    user = await this.userRepository.save(user);

    const token = this.tokenService.generateNewAccessToken(user);

    const res = new SignUpResponse();
    res.accessToken = token;
    res.email = user.email;
    res.firstName = user.nameFirst;
    res.id = user.id;
    res.lastName = user.nameLast;
    res.pfp = user.pfp;

    return res;
  }
}
