import { ConflictException, Injectable } from '@nestjs/common';

import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';

import { UserRepository } from 'apps/api/src/app/database/repositories/user.repository';

import { User } from 'apps/api/src/app/database/entities/user.entity';

import { SignUpRequest, SignUpResponse } from '@memo-life-task/dtos';

@Injectable()
export class SignUpService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userRepository: UserRepository
  ) {}

  async signUp(req: SignUpRequest): Promise<SignUpResponse> {
    const profileWithEmail = await this.userRepository.findOne({
      where: { email: req.email }
    });

    if (profileWithEmail) throw new ConflictException();

    const salt = await this.passwordService.genSalt();
    const password = await this.passwordService.genPass(req.password, salt);

    let user = new User();
    user.email = req.email;
    user.nameFirst = req.firstName;
    user.nameLast = req.lastName;
    user.password = password;
    user.salt = salt;

    user = await this.userRepository.save(user);

    const token = this.tokenService.generateNewAccessToken(user);

    const res = new SignUpResponse();
    res.accessToken = token;
    res.email = user.email;
    res.firstName = user.nameFirst;
    res.id = user.id;
    res.lastName = user.nameLast;
    res.pfp = 'https://jollycontrarian.com/images/6/6c/Rickroll.jpg';

    return res;
  }
}
