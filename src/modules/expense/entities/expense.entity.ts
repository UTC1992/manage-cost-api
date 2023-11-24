import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export interface IExpense {
  businessId?: string;
  userId?: string;
  customerId?: string;
  value: number;
  description: string;
  date: Date;
  isDeleted?: boolean;
  isPaid?: boolean;
}

export type ExpenseDocument = HydratedDocument<Expense & Document>;

@Schema()
export class Expense extends Document implements IExpense {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Business' })
  businessId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: false, type: Types.ObjectId, ref: 'Customer' })
  customerId: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: false, default: false })
  isDeleted: boolean;

  @Prop({ required: false, default: false })
  isPaid: boolean;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);

ExpenseSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
