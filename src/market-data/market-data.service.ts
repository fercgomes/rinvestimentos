import { BadRequestException, Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const yahooFinance = require('yahoo-finance');

@Injectable()
export class MarketDataService {
  constructor() {}

  public async getQuote(ticker: string) {
    let res;
    try {
      res = yahooFinance.quote({
        symbol: ticker,
        modules: [
          'price',
          'summaryDetail',
          'financialData',
          'upgradeDowngradeHistory',
          'earnings',
          'defaultKeyStatistics',
          'calendarEvents',
        ],
      });
      return res;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Ticker not found');
    }
  }

  public async getProfile(ticker: string) {
    try {
    } catch (err) {
      throw err;
    }
  }
}
