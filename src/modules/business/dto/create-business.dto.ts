import { ApiProperty } from '@nestjs/swagger';
import { IBusiness } from '../entities/business.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateBusinessDto implements IBusiness {
  @ApiProperty()
  @IsNotEmpty()
  ruc: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  isDeleted: boolean;
}
