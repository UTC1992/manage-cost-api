import { Controller, Get, Param } from '@nestjs/common';
import { ReportService } from '../services/report.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Reports')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get('customerByUser/:userId')
  customerByUser(@Param('userId') userId: string) {
    return this.reportService.customerByUser(userId);
  }

  @Get('expensesByUser/:userId')
  expensesByUser(@Param('userId') userId: string) {
    return this.reportService.expensesByUser(userId);
  }
}
