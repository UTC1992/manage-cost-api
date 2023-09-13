import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { LoginRequestDto } from 'src/modules/auth/dto/loginRequest.dto';

export class UserRequestDto extends PartialType(LoginRequestDto) {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  dni: string;

  @IsNotEmpty()
  phone: string;
}
