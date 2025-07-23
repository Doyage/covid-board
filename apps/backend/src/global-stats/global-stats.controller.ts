import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Version,
} from '@nestjs/common';
import { CreateGlobalStatDto } from './dto/create-global-stat.dto';
import { DeleteGlobalStatDto } from './dto/delete-global-stat.dto';
import { UpdateGlobalStatDto } from './dto/update-global-stat.dto';
import { GlobalStatsService } from './global-stats.service';

@Controller('global-stats')
export class GlobalStatsController {
  constructor(private readonly globalStatsService: GlobalStatsService) {}

  @Get()
  @Version('1')
  findAll() {
    return this.globalStatsService.findAll();
  }

  @Post()
  @Version('1')
  create(@Body() createGlobalStatDto: CreateGlobalStatDto) {
    return this.globalStatsService.create(createGlobalStatDto);
  }

  @Patch()
  @Version('1')
  update(@Body() updateGlobalStatDto: UpdateGlobalStatDto) {
    return this.globalStatsService.update(updateGlobalStatDto);
  }

  @Delete()
  @Version('1')
  remove(@Body() deleteGlobalStatDto: DeleteGlobalStatDto) {
    return this.globalStatsService.remove(deleteGlobalStatDto);
  }
}
