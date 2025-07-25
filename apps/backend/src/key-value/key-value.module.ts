import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { KeyValueController } from './key-value.controller';
import { KeyValueService } from './key-value.service';

@Module({
  imports: [PrismaModule],
  controllers: [KeyValueController],
  providers: [KeyValueService],
})
export class KeyValueModule {}
