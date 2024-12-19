import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../database/database.module'; // Import DatabaseModule

@Module({
  imports: [DatabaseModule], // Add DatabaseModule to imports
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}