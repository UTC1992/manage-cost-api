import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IExpense } from '../entities/expense.entity';

export class CreateExpenseDto implements IExpense {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty()
  isPaid: boolean;

  @ApiProperty()
  @IsNotEmpty()
  paymentType: string;
}
