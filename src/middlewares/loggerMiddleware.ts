import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CompanyService } from 'src/company/company.service';
import { Company } from 'src/company/schemas/company.schema';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // constructor(private readonly companyService: CompanyService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(`VAQTI- ${new Date()} Methodi: ${req.method}  Url${req.url}`);
    next();
  }
}
