import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

const url = "mongodb://localhost/products";

@Module({
  imports: [ProductModule, MongooseModule.forRoot(url)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
