import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateRequestDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dni: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  roles: string[];
}
