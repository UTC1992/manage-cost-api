import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Expense.name)
    private readonly expenseModel: Model<ExpenseDocument>,
  ) {}

  async paymentsByUser(userId: string, isPaid: boolean) {
    return this.paymentModel
      .find({ userId, isPaid, isDeleted: false })
      .populate('customerId')
      .exec();
  }

  async expensesByUser(userId: string, isPaid: boolean) {
    return this.expenseModel.find({ userId, isPaid, isDeleted: false }).exec();
  }
}
