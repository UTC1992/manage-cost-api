import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto } from '../dto/login-request.dto';
import { AuthService } from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../constants/routes-public';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  login(@Body() userObject: LoginRequestDto) {
    return this.authService.login(userObject);
  }
}
