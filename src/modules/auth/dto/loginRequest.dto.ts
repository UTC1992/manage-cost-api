import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginRequestDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(16)
  @IsNotEmpty()
  password: string;
}
