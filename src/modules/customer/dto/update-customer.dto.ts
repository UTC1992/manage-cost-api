import { ApiProperty } from '@nestjs/swagger';
import { ICustomer } from '../entities/customer.entity';
import { CoordinateDto } from './coordinate.dto';

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
  typeService: number;

  @ApiProperty()
  payDate: Date;

  @ApiProperty()
  routerModel: string;

  @ApiProperty()
  wifiName: string;

  @ApiProperty()
  wifiPassword: string;

  @ApiProperty()
  ip: string;

  @ApiProperty()
  NAP: string;

  @ApiProperty()
  power: number;

  @ApiProperty()
  ONU: number;

  @ApiProperty()
  coordinates: CoordinateDto;

  @ApiProperty()
  isDeleted: boolean;
}
