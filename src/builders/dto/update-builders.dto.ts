import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBuildersDto {
  @IsOptional()
  @IsString()
  readonly first_name: string;
  @IsOptional()
  @IsString()
  readonly last_name: string;
  @IsOptional()
  @IsNumber()
  readonly salary: number;
  @IsOptional()
  @IsMongoId()
  readonly company_id: string;
}
