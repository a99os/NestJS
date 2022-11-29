import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-compnay.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async getAll(): Promise<Company[]> {
    const data = await this.companyModel.find().exec();
    return data;
  }
  async getOne(id: string): Promise<Company> {
    console.log(id);
    return this.companyModel.findById(id);
  }
  async create(CreateCompanyDto: CreateCompanyDto): Promise<Company> {
    console.log(CreateCompanyDto);
    const created = new this.companyModel(CreateCompanyDto);
    return created.save();
  }
  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const updated = this.companyModel.findByIdAndUpdate(id, updateCompanyDto, {
      new: true,
    });
    return updated;
  }
  async delete(id: string): Promise<string> {
    await this.companyModel.findByIdAndDelete(id);
    return 'deleted';
  }

  async getByName(name: string): Promise<Company> {
    return await this.companyModel.findOne({ name: name });
  }
}
