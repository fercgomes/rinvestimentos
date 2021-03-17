import { Controller, Get, Param } from '@nestjs/common';
import { host } from 'src/constants';
import { RedditService } from './reddit.service';

@Controller({ host: host, path: 'reddit' })
export class RedditController {
  constructor(private redditService: RedditService) {}

  @Get('portfolio')
  portfolio() {
    return this.redditService.getMostPopularTickers();
  }

  @Get('dds')
  dds() {
    return this.redditService.getDueDilligencePosts();
  }

  @Get('submission/:id')
  getSubmission(@Param('id') id: string) {
    return this.redditService.getSubmission(id);
  }
}
