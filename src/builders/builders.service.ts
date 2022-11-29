import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Builders, BuildersDocument } from './schemas/builders.schema';
import { Model } from 'mongoose';
import { CreateBuildersDto } from './dto/create-builders.dto';
import { UpdateBuildersDto } from './dto/update-builders.dto';
@Injectable()
export class BuildersService {
  constructor(
    @InjectModel(Builders.name) private buildersModel: Model<BuildersDocument>,
  ) {}

  async getAll(): Promise<Builders[]> {
    return this.buildersModel.find().exec();
  }
  async getOne(id: string): Promise<Builders> {
    return this.buildersModel.findById(id).populate('company_id');
  }
  async create(CreateBuildersDto: CreateBuildersDto): Promise<Builders> {
    const created = new this.buildersModel(CreateBuildersDto);
    return created.save();
  }
  async update(
    id: string,
    UpdateBuildersDto: UpdateBuildersDto,
  ): Promise<Builders> {
    const updated = this.buildersModel.findByIdAndUpdate(
      id,
      UpdateBuildersDto,
      { new: true },
    );
    return updated;
  }
  async delete(id: string): Promise<string> {
    this.buildersModel.findByIdAndDelete(id);
    return 'deleted';
  }

  async getAllbuilders(id: string): Promise<Builders[]> {
    return this.buildersModel.find({ company_id: id });
  }
}
