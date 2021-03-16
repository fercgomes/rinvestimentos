import { Module } from '@nestjs/common';
import { RedditService } from './reddit.service';
import { RedditController } from './reddit.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [RedditService],
  controllers: [RedditController],
})
export class RedditModule {}
