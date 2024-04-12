import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ERole } from '../../auth/enums/role.enum';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Public } from '../../auth/decorators/public.decorator';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  create(@Body() userObject: CreateUserDto) {
    return this.userService.create(userObject);
  }

  @Roles(ERole.Admin)
  @Get()
  findAll(@Query('businessId') businessId: string) {
    return this.userService.findAll(businessId);
  }

  @Roles(ERole.Admin)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Roles(ERole.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateUserDto) {
    return this.userService.update(id, updateCustomerDto);
  }

  @Roles(ERole.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
