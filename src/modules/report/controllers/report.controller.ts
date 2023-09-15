import { Controller, Get, Param } from '@nestjs/common';
import { ReportService } from '../services/report.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reports')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get('facilitiesByUser/:userId')
  facilitiesByUser(@Param('userId') userId: string) {
    return this.reportService.facilitiesByUser(userId);
  }

  @Get('expensesByUser/:userId')
  expensesByUser(@Param('userId') userId: string) {
    return this.reportService.expensesByUser(userId);
  }
}
