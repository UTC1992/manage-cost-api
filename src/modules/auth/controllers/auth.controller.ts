import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto } from '../dto/loginRequest.dto';

@Controller('auth')
export class AuthController {
  @Post()
  login(@Body() userObject: LoginRequestDto) {
    return userObject;
  }
}
