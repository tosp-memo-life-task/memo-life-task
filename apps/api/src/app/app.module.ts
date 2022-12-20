import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';

import entities from './database/context';
import ormConfig from './ormconfig';

import { JwtAuthGuard } from './modules/authentication/guards/jwt.guard';

import { BadRequestExceptionFilter } from './common/filters/bad-request-exception.filter';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { UnauthorizedExceptionFilter } from './common/filters/unauthorized-exception.filter';
import { InvitationModule } from './modules/invitation/invitation.module';

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
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...ormConfig,
          autoLoadEntities: true,
          entities
        };
      }
    }),
    UserModule,
    WorkspaceModule,
    InvitationModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_FILTER, useClass: BadRequestExceptionFilter },
    { provide: APP_FILTER, useClass: UnauthorizedExceptionFilter }
  ]
})
export class AppModule {}
