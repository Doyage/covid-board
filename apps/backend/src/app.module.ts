import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalStatsModule } from './global-stats/global-stats.module';
import { KeyValueModule } from './key-value/key-value.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [GlobalStatsModule, PrismaModule, KeyValueModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
