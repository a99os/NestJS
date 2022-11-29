import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBuildersDto {
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly salary: number;
  @IsMongoId()
  @IsNotEmpty()
  readonly company_id: string;
}
