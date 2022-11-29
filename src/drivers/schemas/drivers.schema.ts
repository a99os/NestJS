import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Company } from 'src/company/schemas/company.schema';
import mongoose, { HydratedDocument } from 'mongoose';
import { Tehnics } from 'src/tehnics/schemas/tehnics.schemas';

export type DriversDocument = HydratedDocument<Drivers>;

@Schema()
export class Drivers {
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
  @Prop()
  salary: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company_id: Company;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tehnics' })
  tehnics_id: Tehnics;
}

export const DriversSchema = SchemaFactory.createForClass(Drivers);
