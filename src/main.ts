import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './errors/allExeption';
import { HttpExceptionFilter } from './errors/http-exception.filter';
import { logger } from './middlewares/logger';

const start = async () => {
  try {
    const PORT = process.env.PORT || 3003;
    const app = await NestFactory.create(AppModule);
    // app.useGlobalFilters(new HttpExceptionFilter());
    const adapterHost = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(adapterHost));
    app.use(logger);
    await app.listen(PORT, () => {
      console.log(`Server ${PORT} - portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
