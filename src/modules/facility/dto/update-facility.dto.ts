import { ApiProperty } from '@nestjs/swagger';
import { CoordinateDto } from './coordinate.dto';
import { IFacility } from '../entities/facility.entity';

export class UpdateFacilityDto implements IFacility {
  @ApiProperty()
  customerId: string;

  @ApiProperty()
  expenseId: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  typeService: string;

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
