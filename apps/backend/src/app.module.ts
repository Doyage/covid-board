import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { GlobalStatsModule } from './global-stats/global-stats.module';
import { KeyValueModule } from './key-value/key-value.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GlobalStatsModule, PrismaModule, KeyValueModule, CountriesModule],
})
export class AppModule {}
