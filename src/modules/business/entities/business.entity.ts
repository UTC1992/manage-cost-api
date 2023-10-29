import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export interface IBusiness {
  userId?: string;
  ruc: string;
  name: string;
  isDeleted?: boolean;
}

export type BusinessDocument = HydratedDocument<Business & Document>;

@Schema()
export class Business extends Document implements IBusiness {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: true })
  ruc: string;

  @Prop({ required: true })
  name: string;

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
