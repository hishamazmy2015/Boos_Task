import { Controller, Get, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookSearchDto } from './dto/book.dto';
import { Book } from './model/BookSearchDto.model';
@Controller('books')
export class BooksController {
  constructor(private bookServ: BooksService) {}
  @Get()
  async getAllBooks(@Query() bookSearchDto: BookSearchDto): Promise<Book[]> {
    return this.bookServ.findAllBooks(bookSearchDto);
  }
}
