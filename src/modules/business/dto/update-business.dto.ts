import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBusinessDto } from './create-business.dto';

export class UpdateBusinessDto extends PartialType(CreateBusinessDto) {
  @ApiProperty()
  ruc: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isDeleted: boolean;
}
