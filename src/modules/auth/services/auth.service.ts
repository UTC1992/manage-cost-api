import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/modules/user/entities/user.entity';
import { LoginRequestDto } from '../dto/login-request.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  Business,
  BusinessDocument,
} from '../../business/entities/business.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
    @InjectModel(Business.name)
    private readonly businessModel: Model<BusinessDocument>,
  ) {}

  async login(loginObject: LoginRequestDto) {
    const { email, password } = loginObject;

    const findUser = await this.userModel.findOne({ email });

    if (!findUser) throw new HttpException('USER_NOT_FOUNT', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) throw new HttpException('INCORRECT_PASSWORD', 403);

    if (!findUser.businessId) {
      throw new HttpException(
        'User does not have relationship with a business.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = {
      userId: findUser.id,
      email: findUser.email,
      name: findUser.firstName,
      roles: findUser.roles,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '1 day',
      }),
    };
  }
}
