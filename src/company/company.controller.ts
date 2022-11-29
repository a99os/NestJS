import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BuildersService } from 'src/builders/builders.service';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-compnay.dto';

@Controller('/company')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly buildersService: BuildersService,
  ) {}

  @Get('builders/:id')
  @HttpCode(200)
  getAllBuilders(@Param('id') id: string) {
    return this.buildersService.getAllbuilders(id);
  }
  @Get()
  @HttpCode(200)
  async getAll() {
    try {
      const data = await this.companyService.getAll();
      if (!data) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }
      return data;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
  @Get(':id')
  @HttpCode(200)
  getOne(@Param('id') id: string) {
    return this.companyService.getOne(id);
  }
  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(201)
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }
  @UsePipes(ValidationPipe)
  @Put(':id')
  @HttpCode(201)
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, updateCompanyDto);
  }
  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string) {
    return this.companyService.delete(id);
  }
}
