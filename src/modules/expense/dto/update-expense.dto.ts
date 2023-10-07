import { ApiProperty } from '@nestjs/swagger';
import { IExpense } from '../entities/expense.entity';

export class UpdateExpenseDto implements IExpense {
  @ApiProperty()
  facilityId: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  isDeleted: boolean;
}
