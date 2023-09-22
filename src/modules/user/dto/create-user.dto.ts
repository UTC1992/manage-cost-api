import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { LoginRequestDto } from 'src/modules/auth/dto/login-request.dto';
import { IUser } from '../entities/user.entity';

export class CreateUserDto
  extends PartialType(LoginRequestDto)
  implements IUser
{
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  dni: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  roles: string[];

  @ApiProperty()
  isDeleted: boolean;
}
