import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export interface IBusiness {
  ruc: string;
  name: string;
  isVerified?: boolean;
  isDeleted?: boolean;
}

export type BusinessDocument = HydratedDocument<Business & Document>;

@Schema()
export class Business extends Document implements IBusiness {
  @Prop({ required: true })
  ruc: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false, default: false })
  isVerified: boolean;

  @Prop({ required: false, default: false })
  isDeleted: boolean;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);

BusinessSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
