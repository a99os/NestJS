import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Drivers } from './schemas/drivers.schema';
import { Model } from 'mongoose';
import { CreateDriversDto } from './dto/create-drivers.dto';
import { UpdateDriversDto } from './dto/update-drivers.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Drivers.name) private driversModel: Model<Drivers>,
  ) {}
  async getAll(): Promise<Drivers[]> {
    return this.driversModel
      .find()
      .populate('company_id')
      .populate('tehnics_id');
  }
  async getOne(id: string): Promise<Drivers> {
    return this.driversModel
      .findOne({ where: { id: id } })
      .populate('company_id');
  }
  async create(CreateDriversDto: CreateDriversDto): Promise<Drivers> {
    const created = new this.driversModel(CreateDriversDto);
    return created.save();
  }
  async update(
    id: string,
    updateDriversDto: UpdateDriversDto,
  ): Promise<Drivers> {
    const updated = this.driversModel.findOneAndUpdate(
      { id: id },
      updateDriversDto,
      {
        new: true,
      },
    );
    return updated;
  }
  async delete(id: string): Promise<string> {
    this.driversModel.findByIdAndDelete(id);
    return 'deleted';
  }
}
