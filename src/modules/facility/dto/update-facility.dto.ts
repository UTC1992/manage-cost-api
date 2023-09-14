import { ApiProperty } from '@nestjs/swagger';
import { CoordinateDto } from './coordinate.dto';

export class UpdateFacilityDto {
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
}
