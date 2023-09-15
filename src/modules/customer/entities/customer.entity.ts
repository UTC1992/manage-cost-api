import { Document, HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface ICustomer {
  facilityId?: string;
  paymentId?: string;
  firstName: string;
  lastName: string;
  dni: string;
  phone: string;
  email: string;
  address: string;
  reference: string;
}

export type CustomerDocument = HydratedDocument<Customer & Document>;

@Schema()
export class Customer extends Document implements ICustomer {
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
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
