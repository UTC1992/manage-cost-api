import { ApiProperty } from '@nestjs/swagger';

export class CoordinateDto {
  @ApiProperty({ type: Number })
  latitude: number;

  @ApiProperty({ type: Number })
  longitude: number;
}
