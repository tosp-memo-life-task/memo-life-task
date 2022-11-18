import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ValidatedUserModel } from '../../../common/models/validated-user.model';

import { IAccessToken } from '../services/token/interfaces/access-token.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(readonly configService: ConfigService) {
    super({
      ignoreExpiration: Boolean(
        JSON.parse(configService.get<string>('JWT_IGNORE_EXPIRATION'))
      ),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_ACCESS_SECRET')
    });
  }

  async validate(payload: IAccessToken): Promise<ValidatedUserModel> {
    const validatedUser = new ValidatedUserModel();
    validatedUser.email = payload.email;
    validatedUser.id = payload.id;

    return validatedUser;
  }
}
