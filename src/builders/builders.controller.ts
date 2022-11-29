import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
} from '@nestjs/common';
import { CheckCompanyInterseptor } from 'src/interseptors/check-company.interseptor';
import { BuildersService } from './builders.service';
import { CreateBuildersDto } from './dto/create-builders.dto';
import { UpdateBuildersDto } from './dto/update-builders.dto';

@Controller('/builders')
export class BuildersController {
  constructor(private readonly buildersService: BuildersService) {}

  @Get()
  @HttpCode(200)
  getAll() {
    return this.buildersService.getAll();
  }
  @Get(':id')
  @HttpCode(200)
  getOne(@Param('id') id: string) {
    return this.buildersService.getOne(id);
  }
  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  // @UseInterceptors(CheckCompanyInterseptor)
  create(@Body() CreateBuildersDto: CreateBuildersDto) {
    return this.buildersService.create(CreateBuildersDto);
  }
  @Put(':id')
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  update(
    @Param('id') id: string,
    @Body() UpdateBuildersDto: UpdateBuildersDto,
  ) {
    return this.buildersService.update(id, UpdateBuildersDto);
  }
  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string) {
    return this.buildersService.delete(id);
  }
}
