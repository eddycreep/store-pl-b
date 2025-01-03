// import { Module } from '@nestjs/common';
// import { ProductsService } from './products.service';
// import { ProductsController } from './products.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Item } from './entities/products.entity';
// import { DatabaseModule } from '../database/database.module'; // Import DatabaseModule

// @Module({
//   imports: [TypeOrmModule.forFeature([Item])], // Registers the Item entity with TypeORM
//   providers: [ProductsService],
//   controllers: [ProductsController],
// })
// export class ProductsModule {}