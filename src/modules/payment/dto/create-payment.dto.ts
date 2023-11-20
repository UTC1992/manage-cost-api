import { IsNotEmpty } from 'class-validator';
import { IPayment } from '../entities/payment.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto implements IPayment {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty()
  isPaid: boolean;

  @ApiProperty()
  @IsNotEmpty()
  paymentType: string;
}
