import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { BuildersModule } from './builders/buiders.module';
import { DriversModule } from './drivers/drivers.module';
import { TehnicsModule } from './tehnics/tehnics.module';
import { LoggerMiddleware } from './loggerMiddleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './errors/http-exception.filter';

//hammasi shu yerga yigiladi
const environment = process.env.MODE_ENV || 'development';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nust-one'),
    CompanyModule,
    BuildersModule,
    DriversModule,
    TehnicsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/company', method: RequestMethod.ALL });
  }
}
