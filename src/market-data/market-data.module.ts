import { Module } from '@nestjs/common';
import { MarketDataController } from './market-data.controller';
import { MarketDataService } from './market-data.service';

@Module({
  imports: [],
  controllers: [MarketDataController],
  providers: [MarketDataService],
})
export class MarketDataModule {}
