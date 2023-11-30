import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBusinessDto } from '../dto/create-business.dto';
import { UpdateBusinessDto } from '../dto/update-business.dto';
import { Business, BusinessDocument } from '../entities/business.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name)
    private readonly businessModel: Model<BusinessDocument>,
  ) {}

  async create(createBusinessDto: CreateBusinessDto): Promise<Business> {
    const business = await this.businessModel
      .findOne({ ruc: createBusinessDto.ruc })
      .exec();

    if (business) {
      throw new HttpException(
        'Business already exist.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.businessModel.create(createBusinessDto);
  }

  async findAll(): Promise<Business[]> {
    return this.businessModel.find({ isDeleted: false }).exec();
  }

  async findOne(id: string): Promise<Business> {
    return this.businessModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateBusinessDto: UpdateBusinessDto,
  ): Promise<Business> {
    return this.businessModel
      .findOneAndUpdate({ _id: id }, updateBusinessDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.businessModel.findByIdAndRemove({ _id: id }).exec();
  }
}
