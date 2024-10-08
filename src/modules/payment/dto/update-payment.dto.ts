import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  @ApiProperty()
  customerId: string;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty()
  isPaid: boolean;

  @ApiProperty()
  paymentType: string;
}
