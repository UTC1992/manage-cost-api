import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto } from '../dto/loginRequest.dto';
import { AuthService } from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() userObject: LoginRequestDto) {
    return this.authService.login(userObject);
  }
}
