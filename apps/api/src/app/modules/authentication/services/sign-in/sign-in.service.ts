import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';

import { UserRepository } from '../../../../database/repositories/user.repository';

import { SignInRequest, SignInResponse } from '@memo-life-task/dtos';

@Injectable()
export class SignInService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userRepository: UserRepository
  ) {}

  async signIn(req: SignInRequest): Promise<SignInResponse> {
    const user = await this.userRepository.findOne({
      where: { email: req.email }
    });

    const isAuthorized = await this.passwordService.compare(
      req.password,
      user.password,
      user.salt
    );

    if (!isAuthorized) throw new UnauthorizedException();

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
