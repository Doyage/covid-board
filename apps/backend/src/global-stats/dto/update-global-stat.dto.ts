import { PartialType } from '@nestjs/mapped-types';
import { CreateGlobalStatDto } from './create-global-stat.dto';

export class UpdateGlobalStatDto extends PartialType(CreateGlobalStatDto) {}
