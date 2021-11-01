import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  isCitizen: boolean;
  @Prop()
  Name: string;
  @Prop()
  EIDA: number;
  @Prop()
  Children: Map<string, number>;
  @Prop()
  hasDrivingLicense: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
