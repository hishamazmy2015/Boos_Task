import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookSearchDto } from '../dto/book.dto';
import { Book, BookDocument } from '../model/BookSearchDto.model';

@Injectable()
export class BookRepository {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async fetchAllBooks(bookSearchDto: BookSearchDto) {
    let name = Object.is(bookSearchDto.Name, undefined)
      ? ''
      : bookSearchDto.Name;
    const children = Object.is(bookSearchDto.Children, undefined)
      ? ''
      : bookSearchDto.Children;
    const isCitizen = Object.is(bookSearchDto.isCitizen, undefined)
      ? ''
      : bookSearchDto.isCitizen;
    const hasDrivingLicense = Object.is(
      bookSearchDto.hasDrivingLicense,
      undefined,
    )
      ? ''
      : bookSearchDto.hasDrivingLicense;

    const books = await this.bookModel.aggregate([
      {
        $project: {
          myCount: {
            $size: { $objectToArray: '$Children' },
          },
        },
      },
    ]);
    //   $and: [{ Name: { $regex: name } }],
    console.log(`books of aggregator `, books);

    console.log('object :>> ', name);
    return await this.bookModel.find({ Name: { $regex: name } });
  }
}
