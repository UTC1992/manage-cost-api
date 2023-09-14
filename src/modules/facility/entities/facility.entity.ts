import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ICoordinates } from '../interfaces/coordinates.interface';
import { Document, HydratedDocument } from 'mongoose';

export type FacilityDocument = HydratedDocument<Facility & Document>;

@Schema()
export class Facility extends Document {
  @Prop({ required: true })
  userId: string;

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
