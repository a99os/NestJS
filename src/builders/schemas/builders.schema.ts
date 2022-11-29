import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import mongoose from 'mongoose';
import { Company } from 'src/company/schemas/company.schema';

export type BuildersDocument = HydratedDocument<Builders>;

@Schema()
export class Builders {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  salary: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company_id: Company;
}

export const BuildersSchema = SchemaFactory.createForClass(Builders);
