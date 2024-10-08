import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../entities/user.entity';

export class UpdateUserDto implements IUser {
  @ApiProperty()
  businessId: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dni: string;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  roles: string[];

  @ApiProperty()
  password: string;
}
