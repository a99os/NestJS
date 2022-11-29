import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ForbiddenException } from './errors/forbidden.exceptions';
import { HttpExceptionFilter } from './errors/http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    try {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Some error description',
      });
      return this.appService.getAll();
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(error);
      // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('ab*cd')
  findAll() {
    return 'This page';
  }

  @Get('req')
  getReq(@Req() request: Request, @Res() response: Response): string {
    console.log(request);
    return 'This page reqres';
  }

  @Post()
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  creat() {
    return 'this action is adds new cat';
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  delete() {
    return 'Deleted';
  }
}
