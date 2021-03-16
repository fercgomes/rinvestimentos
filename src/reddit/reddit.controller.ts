import { Controller, Get } from '@nestjs/common';
import { host } from 'src/constants';
import { RedditService } from './reddit.service';

@Controller({ host: host, path: 'reddit' })
export class RedditController {
  constructor(private redditService: RedditService) {}

  @Get('portfolio')
  portfolio() {
    return this.redditService.getMostPopularTickers();
  }
}
