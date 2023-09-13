import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserRequestDto } from '../dto/userRequest.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userObject: UserRequestDto) {
    return this.userService.create(userObject);
  }

  @Get()
  get() {
    return this.userService.get();
  }
}
