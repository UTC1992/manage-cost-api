import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ICustomer } from '../entities/customer.entity';
import { CoordinateDto } from './coordinate.dto';

export class CreateCustomerDto implements ICustomer {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  dni: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  reference: string;

  @ApiProperty()
  @IsNotEmpty()
  typeService: number;

  @ApiProperty()
  payDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  routerModel: string;

  @ApiProperty()
  @IsNotEmpty()
  wifiName: string;

  @ApiProperty()
  @IsNotEmpty()
  wifiPassword: string;

  @ApiProperty()
  @IsNotEmpty()
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

  @ApiProperty()
  sectorial: string;
}
