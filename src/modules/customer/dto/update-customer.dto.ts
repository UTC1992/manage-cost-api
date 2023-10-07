import { ApiProperty } from '@nestjs/swagger';
import { ICustomer } from '../entities/customer.entity';

export class UpdateCustomerDto implements ICustomer {
  @ApiProperty()
  paymentId?: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dni: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  reference: string;

  @ApiProperty()
  isDeleted: boolean;
}
