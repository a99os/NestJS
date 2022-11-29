import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Company } from 'src/company/schemas/company.schema';

export type TehnicsDocument = HydratedDocument<Tehnics>;

@Schema()
export class Tehnics {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company_id: Company;
}

export const TehnicsSchema = SchemaFactory.createForClass(Tehnics);
