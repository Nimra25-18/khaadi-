import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: false, type: Types.ObjectId, ref: 'Category' })
  parent_id: Types.ObjectId | null;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
