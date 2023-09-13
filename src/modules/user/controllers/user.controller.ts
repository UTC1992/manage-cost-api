import { Body, Controller, Post } from '@nestjs/common';
import { UserRequestDto } from '../dto/userRequest.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userObject: UserRequestDto) {
    return this.userService.create(userObject);
  }
}
