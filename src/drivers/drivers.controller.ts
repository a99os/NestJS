import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Redirect,
  HttpCode,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriversDto } from './dto/create-drivers.dto';
import { UpdateDriversDto } from './dto/update-drivers.dto';

@Controller('/drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  // @Redirect('https://nestjs.com', 301)
  @HttpCode(200)
  getAll() {
    return this.driversService.getAll();
  }
  @Get(':id')
  @HttpCode(200)
  getOne(@Param('id') id: string) {
    return this.driversService.getOne(id);
  }
  @Post()
  @HttpCode(201)
  create(@Body() CreateDriversDto: CreateDriversDto) {
    return this.driversService.create(CreateDriversDto);
  }
  @Put(':id')
  @HttpCode(201)
  update(@Param('id') id: string, @Body() UpdateDriversDto: UpdateDriversDto) {
    return this.driversService.update(id, UpdateDriversDto);
  }
  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string) {
    return this.driversService.delete(id);
  }
}
