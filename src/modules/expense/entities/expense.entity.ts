import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export interface IExpense {
  userId?: string;
  facilityId?: string;
  value: number;
  description: string;
  date: Date;
  isDeleted?: boolean;
}

export type ExpenseDocument = HydratedDocument<Expense & Document>;

@Schema()
export class Expense extends Document implements IExpense {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: false, type: Types.ObjectId, ref: 'Facility' })
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

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
