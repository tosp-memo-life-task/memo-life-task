import { Injectable } from '@nestjs/common';

import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';

import { UserRepository } from '../../../../database/repositories/user.repository';

import { SignInRequest, SignInResponse } from '@memo-life-task/dtos';

import { CommonUnauthorizedException } from 'apps/api/src/app/common/exceptions/common-unauthorized.exception';
import { UserNotFoundException } from 'apps/api/src/app/common/exceptions/user-not-found.exception';

@Injectable()
export class SignInService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userRepository: UserRepository
  ) {}

  async signIn(req: SignInRequest): Promise<SignInResponse> {
    const user = await this.userRepository
      .findOneOrFail({
        where: { email: req.email }
      })
      .catch(() => {
        throw new UserNotFoundException();
      });

    const isAuthorized = await this.passwordService.compare(
      req.password,
      user.password,
      user.salt
    );

    if (!isAuthorized) throw new CommonUnauthorizedException();

    const token = this.tokenService.generateNewAccessToken(user);

    const res = new SignInResponse();
    res.accessToken = token;
    res.email = req.email;
    res.firstName = user.nameFirst;
    res.id = user.id;
    res.lastName = user.nameLast;
    res.pfp = 'https://jollycontrarian.com/images/6/6c/Rickroll.jpg';

    return res;
  }
}
