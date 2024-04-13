import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ResponseModule } from './response/response.module';
import { apiConfig } from '@foxford-test/common';


@Module({
  imports: [
    ConfigModule.forRoot(apiConfig),
    ResponseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
