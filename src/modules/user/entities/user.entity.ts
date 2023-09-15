import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  phone: string;
  dni: string;
  roles: string[];
  email?: string;
  password?: string;
}

export type UserDocument = HydratedDocument<User & Document>;

@Schema()
export class User extends Document implements IUser {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  dni: string;

  @Prop({ required: true })
  roles: string[];

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
