import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { Drivers, DriversSchema } from './schemas/drivers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Drivers.name, schema: DriversSchema }]),
  ],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
