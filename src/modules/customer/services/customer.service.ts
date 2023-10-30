import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from '../entities/customer.entity';
import { Model } from 'mongoose';
import { ERole } from '../../auth/enums/role.enum';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
  ) { }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerModel.create(createCustomerDto);
  }

  async findAll(role: ERole, businessId: string, userId: string): Promise<Customer[]> {

    if (role === ERole.Admin) {
      return this.customerModel.find({
        isDeleted: false, businessId
      }).exec();
    }

    return this.customerModel.find({
      isDeleted: false, $and:  [{
        businessId
      }, { userId }]
    }).exec();
    
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerModel
      .findOneAndUpdate({ _id: id }, updateCustomerDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.customerModel.findByIdAndRemove({ _id: id }).exec();
  }
}
