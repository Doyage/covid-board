import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateGlobalStatDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 2, { message: 'Country code must be exactly 2 characters long' })
  readonly cc: string;

  @IsNotEmpty()
  @IsDateString()
  readonly date: Date;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  readonly confirmed: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly death?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly released?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly tested?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly testing?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly negative?: number;
}
