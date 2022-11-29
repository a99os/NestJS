import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tehnics } from './schemas/tehnics.schemas';
import { Model } from 'mongoose';
import { CreateTehnicsDto } from './dto/create-tehnics.dto';
import { UpdateTehnicsDto } from './dto/update-tehnics.dto';

@Injectable()
export class TehnicsService {
  constructor(
    @InjectModel(Tehnics.name) private tehnicsModel: Model<Tehnics>,
  ) {}
  async getAll(): Promise<Tehnics[]> {
    return this.tehnicsModel.find().populate('company_id');
  }
  async getOne(id: string): Promise<Tehnics> {
    return this.tehnicsModel
      .findOne({ where: { id: id } })
      .populate('company_id');
  }
  async create(createTehnicsDto: CreateTehnicsDto): Promise<Tehnics> {
    const newdata = new this.tehnicsModel(createTehnicsDto);
    return newdata.save();
  }
  async update(
    id: string,
    updateTehnicsDto: UpdateTehnicsDto,
  ): Promise<Tehnics> {
    const data = await this.tehnicsModel.findOneAndUpdate(
      { id: id },
      updateTehnicsDto,
      { new: true },
    );
    return data.save();
  }
  async delete(id: string): Promise<string> {
    await this.tehnicsModel.deleteOne({ id: id });
    return 'deleted';
  }
}
