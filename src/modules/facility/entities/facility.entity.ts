import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ICoordinates } from '../interfaces/coordinates.interface';
import { Document, HydratedDocument, Types } from 'mongoose';

export interface IFacility {
  userId?: string;
  customerId?: string;
  expenseId?: string;
  paymentId?: string;
  date: Date;
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
}

export type FacilityDocument = HydratedDocument<Facility & Document>;

@Schema()
export class Facility extends Document implements IFacility {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Customer' })
  customerId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Expense' })
  expenseId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Payment' })
  paymentId: string;

  @Prop({ required: true })
  date: Date;

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
}

export const FacilitySchema = SchemaFactory.createForClass(Facility);
