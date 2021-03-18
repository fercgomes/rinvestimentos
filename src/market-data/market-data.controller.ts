import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { host } from 'src/constants';
import { MarketDataService } from './market-data.service';

@Controller({ host: host, path: 'market-data' })
export class MarketDataController {
  constructor(private marketDataService: MarketDataService) {}

  @Get('quote')
  public async getQuote(@Query('ticker') ticker: string) {
    if (ticker) {
      return this.marketDataService.getQuote(ticker);
    } else {
      throw new BadRequestException('Provide a ticker symbol');
    }
  }
}
