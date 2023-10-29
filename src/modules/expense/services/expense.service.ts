import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { UpdateExpenseDto } from '../dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense, ExpenseDocument } from '../entities/expense.entity';
import { Model } from 'mongoose';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name)
    private readonly expenseModel: Model<ExpenseDocument>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    return this.expenseModel.create(createExpenseDto);
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseModel
      .find({ isDeleted: false })
      .populate('userId')
      .exec();
  }

  async findOne(id: string): Promise<Expense> {
    return this.expenseModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expense> {
    return this.expenseModel
      .findOneAndUpdate({ _id: id }, updateExpenseDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.expenseModel.findByIdAndRemove({ _id: id }).exec();
  }
}
