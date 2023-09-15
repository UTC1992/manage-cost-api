import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export interface IExpense {
  userId?: string;
  value: number;
  description: string;
  date: Date;
}

export type ExpenseDocument = HydratedDocument<Expense & Document>;

@Schema()
export class Expense extends Document implements IExpense {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
