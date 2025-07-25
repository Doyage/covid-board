import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Version,
} from '@nestjs/common';
import { CreateKeyValueDto } from './dto/create-key-value.dto';
import { UpdateKeyValueDto } from './dto/update-key-value.dto';
import { KeyValueService } from './key-value.service';

@Controller('key-value')
export class KeyValueController {
  constructor(private readonly keyValueService: KeyValueService) {}

  @Get(':key')
  findOne(@Param('key') key: string) {
    return this.keyValueService.findOne(key);
  }

  @Post()
  @Version('1')
  create(@Body() createKeyValueDto: CreateKeyValueDto) {
    return this.keyValueService.create(createKeyValueDto);
  }

  @Patch()
  @Version('1')
  update(@Body() updateKeyValueDto: UpdateKeyValueDto) {
    return this.keyValueService.update(updateKeyValueDto);
  }

  @Delete(':key')
  @Version('1')
  remove(@Param('key') key: string) {
    return this.keyValueService.remove(key);
  }
}
