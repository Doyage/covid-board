import { IsNotEmpty, IsString } from 'class-validator';

export class CreateKeyValueDto {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}
