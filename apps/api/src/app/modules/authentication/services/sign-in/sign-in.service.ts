import { Injectable } from '@nestjs/common';

import { UserRepository } from 'apps/api/src/app/database/repositories/user.repository';

import { SignInRequest, SignInResponse } from '@memo-life-task/dtos';

@Injectable()
export class SignInService {
  constructor(private readonly userRepository: UserRepository) {}

  async signIn(req: SignInRequest): Promise<SignInResponse> {
    const user = await this.userRepository.findOne({
      where: { email: req.email }
    });

    console.log(user);

    const res = new SignInResponse();
    res.accessToken = 'token';
    res.email = req.email;
    res.firstName = 'Firstname from db';
    res.id = 1;
    res.lastName = 'Lastname from db';
    res.pfp = 'https://jollycontrarian.com/images/6/6c/Rickroll.jpg';

    return res;
  }
}
