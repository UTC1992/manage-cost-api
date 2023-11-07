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
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportService.paymentsByUser(
      userId,
      isPaid,
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
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportService.expensesByUser(
      userId,
      isPaid,
      startDate,
      endDate,
    );
  }

  @Patch('updateExpensesAndPaymentsToIsPaid')
  async updateExpensesAndPaymentsToIsPaid(@Query('userId') userId: string) {
    const [updateExpenses, updatePayments] = await Promise.allSettled([
      this.reportService.updateManyExpensesIsPaid(userId),
      this.reportService.updateManyPaymentsIsPaid(userId),
    ]);

    return (
      updateExpenses.status === 'fulfilled' &&
      updatePayments.status === 'fulfilled'
    );
  }
}
