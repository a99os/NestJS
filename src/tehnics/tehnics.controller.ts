import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTehnicsDto } from './dto/create-tehnics.dto';
import { UpdateTehnicsDto } from './dto/update-tehnics.dto';
import { TehnicsService } from './tehnics.service';

@Controller('/tehnics')
export class TehnicsController {
  constructor(private readonly tehnicsService: TehnicsService) {}

  @Get()
  @HttpCode(200)
  getAll() {
    return this.tehnicsService.getAll();
  }
  @Get(':id')
  @HttpCode(200)
  getOne(id: string) {
    return this.tehnicsService.getOne(id);
  }
  @Post()
  @HttpCode(201)
  create(@Body() CreateTehnicsDto: CreateTehnicsDto) {
    return this.tehnicsService.create(CreateTehnicsDto);
  }
  @Put(':id')
  @HttpCode(201)
  update(@Body() UpdateTehnicsDto: UpdateTehnicsDto, @Param('id') id: string) {
    return this.tehnicsService.update(id, UpdateTehnicsDto);
  }
  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string) {
    return this.tehnicsService.delete(id);
  }
}
