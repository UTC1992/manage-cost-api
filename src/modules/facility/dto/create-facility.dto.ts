import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CoordinateDto } from './coordinate.dto';
import { IFacility } from '../entities/facility.entity';

export class CreateFacilityDto implements IFacility {
  @ApiProperty()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  typeService: string;

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
  @IsNotEmpty()
  coordinates: CoordinateDto;

  @ApiProperty()
  isDeleted: boolean;
}
