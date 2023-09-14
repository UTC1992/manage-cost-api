import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';
import { UserRequestDto } from '../dto/user-request.dto';
import { UserUpdateRequestDto } from '../dto/user-update-request.dto';

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

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateCustomerDto: UserUpdateRequestDto,
  ): Promise<User> {
    return this.userModel
      .findOneAndUpdate({ _id: id }, updateCustomerDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.userModel.findByIdAndRemove({ _id: id }).exec();
  }
}
