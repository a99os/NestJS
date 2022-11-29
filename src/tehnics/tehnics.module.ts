import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tehnics, TehnicsSchema } from './schemas/tehnics.schemas';
import { TehnicsController } from './tehnics.controller';
import { TehnicsService } from './tehnics.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tehnics.name, schema: TehnicsSchema }]),
  ],
  controllers: [TehnicsController],
  providers: [TehnicsService],
})
export class TehnicsModule {}
