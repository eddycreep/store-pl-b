import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { DatabaseService } from '../database/database.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule.forRoot()], // Enable EventEmitter
  controllers: [BasketController],
  providers: [BasketService, DatabaseService],
})
export class BasketModule {}