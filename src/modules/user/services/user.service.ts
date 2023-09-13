import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';
import { UserRequestDto } from '../dto/userRequest.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(userObject: UserRequestDto) {
    const { password } = userObject;

    const plainToHash = await hash(password, 10);

    userObject = { ...userObject, password: plainToHash };

    return this.userModel.create(userObject);
  }

  async get() {
    return this.userModel.find();
  }
}
