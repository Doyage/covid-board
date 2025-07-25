import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyValueDto } from './create-key-value.dto';

export class UpdateKeyValueDto extends PartialType(CreateKeyValueDto) {}
