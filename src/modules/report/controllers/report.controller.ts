import { Controller, Get, Param } from '@nestjs/common';
import { ReportService } from '../services/report.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Reports')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get('paymentsByUser/:userId')
  paymentsByUser(@Param('userId') userId: string) {
    return this.reportService.paymentsByUser(userId);
  }

  @Get('expensesByUser/:userId')
  expensesByUser(@Param('userId') userId: string) {
    return this.reportService.expensesByUser(userId);
  }
}
