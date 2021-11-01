import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URL } from './application.properties';

@Module({
  imports: [BooksModule, MongooseModule.forRoot(
    'mongodb+srv://admin:Pssw0rd2020@cluster0.s7twk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    // 'mongodb+srv://admin:<password>@cluster0.s7twk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )],
})
export class AppModule {}
