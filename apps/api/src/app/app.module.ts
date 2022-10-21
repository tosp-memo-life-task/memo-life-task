import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthenticationModule } from './modules/authentication/authentication.module';

@Module({
  controllers: [],
  imports: [
    AuthenticationModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true
    })
  ],
  providers: []
})
export class AppModule {}
