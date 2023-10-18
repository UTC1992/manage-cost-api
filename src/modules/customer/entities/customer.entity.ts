import { Document, HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface ICustomer {
  userId?: string;
  facilityId?: string;
  paymentId?: string;
  firstName: string;
  lastName: string;
  dni: string;
  phone: string;
  email: string;
  address: string;
  reference: string;
  isDeleted?: boolean;
}

export type CustomerDocument = HydratedDocument<Customer & Document>;

@Schema()
export class Customer extends Document implements ICustomer {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Facility' })
  facilityId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Payment' })
  paymentId: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  dni: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  reference: string;

  @Prop({ required: true })
  isDeleted: boolean;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

CustomerSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
