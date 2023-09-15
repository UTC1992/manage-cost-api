import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Facility,
  FacilityDocument,
} from '../../facility/entities/facility.entity';
import { Model } from 'mongoose';
import {
  Customer,
  CustomerDocument,
} from '../../customer/entities/customer.entity';
import {
  Payment,
  PaymentDocument,
} from '../../payment/entities/payment.entity';
import { User, UserDocument } from '../../user/entities/user.entity';
import {
  Expense,
  ExpenseDocument,
} from '../../expense/entities/expense.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(Facility.name)
    private readonly facilityModel: Model<FacilityDocument>,
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Expense.name)
    private readonly expenseModel: Model<ExpenseDocument>,
  ) {}

  async facilitiesByUser(userId: string) {
    return this.facilityModel
      .find({ userId })
      .populate('customerId')
      .populate('paymentId')
      .exec();
  }

  async expensesByUser(userId: string) {
    return this.expenseModel.find({ userId }).exec();
  }
}
