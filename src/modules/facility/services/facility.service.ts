import { Injectable } from '@nestjs/common';
import { CreateFacilityDto } from '../dto/create-facility.dto';
import { UpdateFacilityDto } from '../dto/update-facility.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Facility, FacilityDocument } from '../entities/facility.entity';
import { Model } from 'mongoose';

@Injectable()
export class FacilityService {
  constructor(
    @InjectModel(Facility.name)
    private readonly facilityModel: Model<FacilityDocument>,
  ) {}

  async create(createFacilityDto: CreateFacilityDto): Promise<Facility> {
    return this.facilityModel.create(createFacilityDto);
  }

  async findAll(): Promise<Facility[]> {
    return this.facilityModel.find().exec();
  }

  async findOne(id: string): Promise<Facility> {
    return this.facilityModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateFacilityDto: UpdateFacilityDto,
  ): Promise<Facility> {
    return this.facilityModel
      .findOneAndUpdate({ _id: id }, updateFacilityDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.facilityModel.findByIdAndRemove({ _id: id }).exec();
  }
}
