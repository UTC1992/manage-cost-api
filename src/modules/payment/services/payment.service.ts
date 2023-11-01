import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from '../entities/payment.entity';
import { Model } from 'mongoose';
import { ERole } from '../../auth/enums/role.enum';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentModel.create(createPaymentDto);
  }

  async findAll(
    role: ERole,
    businessId: string,
    userId?: string,
  ): Promise<Payment[]> {
    console.log(userId);
    if (role === ERole.Admin && userId === 'undefined') {
      return this.paymentModel
        .find({
          isDeleted: false,
          businessId,
        })
        .populate('customerId')
        .exec();
    }

    return this.paymentModel
      .find({
        isDeleted: false,
        $and: [
          {
            businessId,
          },
          { userId },
        ],
      })
      .populate('customerId')
      .exec();
  }

  async findOne(id: string): Promise<Payment> {
    return this.paymentModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment> {
    return this.paymentModel
      .findOneAndUpdate({ _id: id }, updatePaymentDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.paymentModel.findByIdAndRemove({ _id: id }).exec();
  }
}
