import { Controller, Get, Patch, Query } from '@nestjs/common';
import { ReportService } from '../services/report.service';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Reports')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get('paymentsByUser')
  @ApiQuery({
    name: 'startDate',
    required: false,
  })
  @ApiQuery({
    name: 'endDate',
    required: false,
  })
  paymentsByUser(
    @Query('userId') userId: string,
    @Query('isPaid') isPaid: boolean,
    @Query('paymentType') paymentType: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportService.paymentsByUser(
      userId,
      isPaid,
      paymentType,
      startDate,
      endDate,
    );
  }

  @Get('expensesByUser')
  @ApiQuery({
    name: 'startDate',
    required: false,
  })
  @ApiQuery({
    name: 'endDate',
    required: false,
  })
  expensesByUser(
    @Query('userId') userId: string,
    @Query('isPaid') isPaid: boolean,
    @Query('paymentType') paymentType: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportService.expensesByUser(
      userId,
      isPaid,
      paymentType,
      startDate,
      endDate,
    );
  }

  @Patch('updateExpensesAndPaymentsToIsPaid')
  async updateExpensesAndPaymentsToIsPaid(
    @Query('userId') userId: string,
    @Query('paymentType') paymentType: string,
  ) {
    const [updateExpenses, updatePayments] = await Promise.allSettled([
      this.reportService.updateManyExpensesIsPaid(userId, paymentType),
      this.reportService.updateManyPaymentsIsPaid(userId, paymentType),
    ]);

    return (
      updateExpenses.status === 'fulfilled' &&
      updatePayments.status === 'fulfilled'
    );
  }
}
