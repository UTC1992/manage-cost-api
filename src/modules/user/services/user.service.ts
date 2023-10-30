import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ERole } from '../../auth/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(userObject: CreateUserDto): Promise<User> {
    const { password } = userObject;

    const plainToHash = await hash(password, 10);

    userObject = { ...userObject, password: plainToHash, isDeleted: false };

    return this.userModel.create(userObject);
  }

  async findAll(businessId: string): Promise<User[]> {
    return this.userModel
      .find({
        $and: [
          { isDeleted: false },
          { businessId },
          { roles: [ERole.Technician] },
        ],
      })
      .exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCustomerDto: UpdateUserDto): Promise<User> {
    const { password } = updateCustomerDto;
    if (password !== undefined) {
      const plainToHash = await hash(password, 10);

      updateCustomerDto = {
        ...updateCustomerDto,
        password: plainToHash,
        isDeleted: false,
      };
    }

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
