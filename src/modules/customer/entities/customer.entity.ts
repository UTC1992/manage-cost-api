import { Document, HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ICoordinates } from '../interfaces/coordinates.interface';

export interface ICustomer {
  userId?: string;
  paymentId?: string;
  firstName: string;
  lastName: string;
  dni: string;
  phone: string;
  email: string;
  address: string;
  reference: string;
  createdAt?: Date;
  typeService: string;
  payDate: Date;
  routerModel: string;
  wifiName: string;
  wifiPassword: string;
  ip: string;
  NAP: string;
  power: number;
  ONU: number;
  coordinates: ICoordinates;
  isDeleted?: boolean;
}

export type CustomerDocument = HydratedDocument<Customer & Document>;

@Schema()
export class Customer extends Document implements ICustomer {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;

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
  createdAt: Date;

  @Prop({ required: true })
  typeService: string;

  @Prop({ required: true })
  payDate: Date;

  @Prop({ required: true })
  routerModel: string;

  @Prop({ required: true })
  wifiName: string;

  @Prop({ required: true })
  wifiPassword: string;

  @Prop({ required: true })
  ip: string;

  @Prop({ required: true })
  NAP: string;

  @Prop({ required: true })
  power: number;

  @Prop({ required: true })
  ONU: number;

  @Prop({ required: true, type: Object })
  coordinates: ICoordinates;

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
