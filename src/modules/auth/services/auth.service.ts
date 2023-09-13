import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/modules/user/entities/user.entity';
import { LoginRequestDto } from '../dto/loginRequest.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async login(loginObject: LoginRequestDto) {
    const { email, password } = loginObject;

    const findUser = await this.userModel.findOne({ email });

    if (!findUser) throw new HttpException('USER_NOT_FOUNT', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) throw new HttpException('INCORRECT_PASSWORD', 403);

    const userData = findUser;

    return userData;
  }
}
