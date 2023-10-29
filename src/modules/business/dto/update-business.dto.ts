import { ApiProperty } from '@nestjs/swagger';
import { IBusiness } from '../entities/business.entity';

export class UpdateBusinessDto implements IBusiness {
  @ApiProperty()
  ruc: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty()
  isDeleted: boolean;
}
