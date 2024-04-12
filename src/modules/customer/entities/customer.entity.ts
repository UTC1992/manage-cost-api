import { Document, HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ICoordinates } from '../interfaces/coordinates.interface';

export interface ICustomer {
  businessId?: string;
  userId?: string;
  firstName: string;
  lastName: string;
  dni: string;
  phone: string;
  email?: string;
  address: string;
  reference: string;
  createdAt?: Date;
  typeService: number;
  payDate?: Date;
  routerModel: string;
  wifiName: string;
  wifiPassword: string;
  ip: string;
  NAP?: string;
  power?: number;
  ONU?: number;
  coordinates?: ICoordinates;
  isDeleted?: boolean;
  sectorial: string;
}

export type CustomerDocument = HydratedDocument<Customer & Document>;

@Schema()
export class Customer extends Document implements ICustomer {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Business' })
  businessId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  dni: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  reference: string;

  @Prop({ required: false, default: new Date() })
  createdAt: Date;

  @Prop({ required: true })
  typeService: number;

  @Prop({ required: false })
  payDate: Date;

  @Prop({ required: true })
  routerModel: string;

  @Prop({ required: true })
  wifiName: string;

  @Prop({ required: true })
  wifiPassword: string;

  @Prop({ required: true })
  ip: string;

  @Prop({ required: false })
  NAP: string;

  @Prop({ required: false })
  power: number;

  @Prop({ required: false })
  ONU: number;

  @Prop({ required: false, type: Object })
  coordinates: ICoordinates;

  @Prop({ required: false, default: false })
  isDeleted: boolean;

  @Prop({ required: true })
  sectorial: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

CustomerSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
