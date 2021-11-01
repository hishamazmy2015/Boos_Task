import { Injectable } from '@nestjs/common';
import { BookRepository } from './repository/book.repository';
import { BookSearchDto } from './dto/book.dto';
import { Book } from './model/BookSearchDto.model';

@Injectable()
export class BooksService {
  constructor(private bookRepo: BookRepository) {}

  findAllBooks(bookSearchDto: BookSearchDto) {
    return this.bookRepo.fetchAllBooks(bookSearchDto);
  }
}
