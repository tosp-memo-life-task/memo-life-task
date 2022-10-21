import { Injectable } from '@nestjs/common';

import { SignUpRequest, SignUpResponse } from '@memo-life-task/dtos';
@Injectable()
export class SignUpService {
  constructor() {}

  async signUp(req: SignUpRequest): Promise<SignUpResponse> {
    const res = new SignUpResponse();
    res.accessToken = 'token';
    res.email = req.email;
    res.firstName = req.firstName;
    res.id = 1;
    res.lastName = req.lastName;
    res.pfp = 'https://jollycontrarian.com/images/6/6c/Rickroll.jpg';

    return res;
  }
}
