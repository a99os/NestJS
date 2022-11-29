import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAll() {
    return 'App module';
  }
}
