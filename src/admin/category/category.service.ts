import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}
  async createCategory(data: Partial<Category>): Promise<Category> {
    const newCategory = new this.categoryModel(data);
    return newCategory.save();
  }
  async getAllCategory(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }
  async getCategoryById(id: string): Promise<Category | null> {
    return this.categoryModel.findById(id).exec();
  }
  async updateById(
    id: string,
    data: Partial<Category>,
  ): Promise<Category | null> {
    return this.categoryModel
      .findByIdAndUpdate({ _id: id }, data, { new: true })
      .exec();
  }
}
