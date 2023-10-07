import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export interface IPayment {
  customerId?: string;
  facilityId?: string;
  value: number;
  description: string;
  date: Date;
  isDeleted?: boolean;
}

export type PaymentDocument = HydratedDocument<Payment & Document>;

@Schema()
export class Payment extends Document implements IPayment {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Customer' })
  customerId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Facility' })
  facilityId: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  isDeleted: boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
