import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthenticationModule } from './modules/authentication/authentication.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  imports: [
    AuthenticationModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true
    })
  ],
  providers: [AppService]
})
export class AppModule {}
