import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../entities/user.entity';

export class UpdateUserDto implements IUser {
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
