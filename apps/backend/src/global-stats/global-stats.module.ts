import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlobalStatsController } from './global-stats.controller';
import { GlobalStatsService } from './global-stats.service';

@Module({
  imports: [PrismaModule],
  controllers: [GlobalStatsController],
  providers: [GlobalStatsService],
})
export class GlobalStatsModule {}
