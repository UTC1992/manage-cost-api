import { Module } from '@nestjs/common';
import { ReportService } from './services/report.service';
import { ReportController } from './controllers/report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Facility, FacilitySchema } from '../facility/entities/facility.entity';
import { Customer, CustomerSchema } from '../customer/entities/customer.entity';
import { User, UserSchema } from '../user/entities/user.entity';
import { Payment, PaymentSchema } from '../payment/entities/payment.entity';
import { Expense, ExpenseSchema } from '../expense/entities/expense.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Facility.name, schema: FacilitySchema },
      { name: Customer.name, schema: CustomerSchema },
      { name: User.name, schema: UserSchema },
      { name: Payment.name, schema: PaymentSchema },
      { name: Expense.name, schema: ExpenseSchema },
    ]),
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
