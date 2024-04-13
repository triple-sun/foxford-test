import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { getSwaggerConfig } from '@foxford-test/common';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.API_PORT || 3000;

  const document = SwaggerModule.createDocument(
    app,
    getSwaggerConfig('Foxford test API', `Foxford test service API`, '1.0')
  );
  SwaggerModule.setup('spec', app, document);

    app.enableCors({
      origin: '*',
      //allowedHeaders: 'Content-Type, Accept',
      //credentials: true,
      //methods: 'GET,PUT,POST,DELETE,OPTIONS',
      optionsSuccessStatus: 200,
    });

  await app.listen(port);
  Logger.log(
    `🚀 Foxford test api is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
