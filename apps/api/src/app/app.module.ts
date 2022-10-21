import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { AuthenticationModule } from './modules/authentication/authentication.module';

import { JwtAuthGuard } from './modules/authentication/guards/jwt.guard';

@Module({
  controllers: [],
  imports: [
    AuthenticationModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_ACCESS_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_ACCESS_EXPIRATION_TIME')
        }
      })
    })
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
