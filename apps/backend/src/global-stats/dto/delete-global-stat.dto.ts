import { IsDateString, IsNotEmpty, IsString, Length } from 'class-validator';

export class DeleteGlobalStatDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 2, { message: 'Country code must be exactly 2 characters long' })
  readonly cc: string;

  @IsNotEmpty()
  @IsDateString()
  readonly date: Date;
}
