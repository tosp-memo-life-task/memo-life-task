import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { User } from '../../../../database/entities/user.entity';

import { IAccessToken } from './interfaces/access-token.interface';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {}

  generateNewAccessToken(user: User) {
    const payload: IAccessToken = {
      email: user.email,
      id: user.id
    };

    return this.jwtService.sign(payload, {
      expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRATION_TIME'),
      secret: this.configService.get<string>('JWT_ACCESS_SECRET')
    });
  }
}
