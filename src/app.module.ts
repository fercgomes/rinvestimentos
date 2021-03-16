import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { RedditModule } from './reddit/reddit.module';

const path = require('path');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'client', 'build'),
    }),
    RedditModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
