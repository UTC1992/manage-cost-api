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
  @IsNotEmpty()
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
  @IsNotEmpty()
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
  @IsNotEmpty()
  NAP: string;

  @ApiProperty()
  @IsNotEmpty()
  power: number;

  @ApiProperty()
  @IsNotEmpty()
  ONU: number;

  @ApiProperty()
  coordinates: CoordinateDto;

  @ApiProperty()
  isDeleted: boolean;
}
