import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { DatabaseModule } from '../database/database.module'; // Import DatabaseModule

@Module({
  imports: [DatabaseModule], // Add DatabaseModule to imports
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
