import { Module } from '@nestjs/common';
import { FacilityController } from './controllers/facility.controller';
import { FacilityService } from './services/facility.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Facility, FacilitySchema } from './entities/facility.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Facility.name, schema: FacilitySchema },
    ]),
  ],
  controllers: [FacilityController],
  providers: [FacilityService],
})
export class FacilityModule {}
