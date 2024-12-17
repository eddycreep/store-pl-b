import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService], // Provide DatabaseService
  exports: [DatabaseService],   // Export DatabaseService to make it accessible in other modules
})
export class DatabaseModule {}