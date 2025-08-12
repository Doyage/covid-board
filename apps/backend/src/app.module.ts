import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { GlobalStatsModule } from './global-stats/global-stats.module';
import { KeyValueModule } from './key-value/key-value.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { CountiresController } from './countires/countires.controller';

@Module({
  imports: [GlobalStatsModule, PrismaModule, KeyValueModule, CountriesModule],
  controllers: [AppController, CountiresController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
