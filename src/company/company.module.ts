import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { Company, CompanySchema } from './schemas/company.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CheckNameMiddleware } from 'src/middlewares/checkNameMiddleware';
import { CheckIdMiddleware } from 'src/middlewares/checkIdMiddleware';
import { BuildersController } from 'src/builders/builders.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckNameMiddleware)
      .exclude(
        {
          path: 'company',
          method: RequestMethod.GET,
        },
        {
          path: 'company/:id',
          method: RequestMethod.DELETE,
        },
        {
          path: 'company/:id',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(CompanyController)
      .apply(CheckIdMiddleware)
      .exclude(
        {
          path: 'builders',
          method: RequestMethod.GET,
        },
        {
          path: 'builders/:id',
          method: RequestMethod.DELETE,
        },
        { 
          path: 'builders/:id',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(BuildersController);
  }
}
