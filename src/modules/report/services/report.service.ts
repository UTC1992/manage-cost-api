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

  async paymentsByUser(
    userId: string,
    isPaid: boolean,
    startDate?: string,
    endDate?: string,
  ) {
    if (!userId) {
      return;
    }

    if (startDate !== 'undefined' && endDate !== 'undefined') {
      console.log(startDate, endDate);
      return this.paymentModel
        .find({
          userId,
          isPaid,
          isDeleted: false,
          date: {
            $gte: startDate,
            $lte: endDate,
          },
        })
        .populate('customerId')
        .exec();
    }

    return this.paymentModel
      .find({ userId, isPaid, isDeleted: false })
      .populate('customerId')
      .exec();
  }

  async expensesByUser(
    userId: string,
    isPaid: boolean,
    startDate?: string,
    endDate?: string,
  ) {
    if (!userId) {
      return;
    }

    if (startDate !== 'undefined' && endDate !== 'undefined') {
      return this.expenseModel
        .find({
          userId,
          isPaid,
          isDeleted: false,
          date: {
            $gte: startDate,
            $lte: endDate,
          },
        })
        .populate('customerId')
        .exec();
    }

    return this.expenseModel.find({ userId, isPaid, isDeleted: false }).exec();
  }

  async updateManyExpensesIsPaid(userId: string) {
    return this.expenseModel.updateMany(
      { isPaid: false, userId },
      { $set: { isPaid: true } },
    );
  }

  async updateManyPaymentsIsPaid(userId: string) {
    return this.paymentModel.updateMany(
      { isPaid: false, userId },
      { $set: { isPaid: true } },
    );
  }
}
