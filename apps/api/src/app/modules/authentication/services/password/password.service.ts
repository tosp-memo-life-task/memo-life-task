import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  constructor(private readonly configService: ConfigService) {}

  async genPass(pass: string, userSalt: string): Promise<string> {
    const appSalt = this.configService.get<string>('SALT');

    const hash = await bcrypt.hash(appSalt + pass, userSalt);

    return hash;
  }

  async genSalt(): Promise<string> {
    return await bcrypt.genSalt(10);
  }

  async compare(
    plainPassword: string,
    hashedPassword: string,
    salt: string
  ): Promise<boolean> {
    const passwordResult = await this.genPass(plainPassword, salt);

    return passwordResult === hashedPassword;
  }
}
