import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { json, urlencoded } from 'express';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const version = configService.get<string>('API_VERSION') || '1';
  app.enableVersioning({
    defaultVersion: version,
    type: VersioningType.URI
  });

  const prefix = configService.get<string>('API_PREFIX') || 'api';
  app.setGlobalPrefix(prefix);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true
    })
  );

  app.use(compression());
  app.use(json({ limit: '1mb' }));
  app.use(urlencoded({ extended: true, limit: '1mb' }));

  const options = new DocumentBuilder()
    .setTitle('Memo Life Task')
    .setDescription(
      'A basic task manager with features like: workspaces, lists and shared tasks.'
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const port = configService.get<number>('API_PORT') || 3000;
  await app.listen(port);

  const host = configService.get<string>('API_HOST');
  Logger.log(
    `🚀 Application is running on: ${host}:${port}/${prefix}/v${version}/`
  );
}

bootstrap();
