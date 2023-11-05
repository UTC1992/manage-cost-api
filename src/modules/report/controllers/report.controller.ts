import { Controller, Get, Query } from '@nestjs/common';
import { ReportService } from '../services/report.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Reports')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get('paymentsByUser')
  paymentsByUser(
    @Query('userId') userId: string,
    @Query('isPaid') isPaid: boolean,
  ) {
    return this.reportService.paymentsByUser(userId, isPaid);
  }

  @Get('expensesByUser')
  expensesByUser(
    @Query('userId') userId: string,
    @Query('isPaid') isPaid: boolean,
  ) {
    return this.reportService.expensesByUser(userId, isPaid);
  }
}
