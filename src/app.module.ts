import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { CustomerModule } from './modules/customer/customer.module';
import { FacilityModule } from './modules/facility/facility.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { PaymentModule } from './modules/payment/payment.module';
import { ReportModule } from './modules/report/report.module';
import { BusinessModule } from './modules/business/business.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/manageCostDb'),
    AuthModule,
    UserModule,
    CustomerModule,
    FacilityModule,
    ExpenseModule,
    PaymentModule,
    ReportModule,
    BusinessModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
