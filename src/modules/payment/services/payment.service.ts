import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from '../entities/payment.entity';
import { Model } from 'mongoose';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentModel.create(createPaymentDto);
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find({ isDeleted: false }).exec();
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
