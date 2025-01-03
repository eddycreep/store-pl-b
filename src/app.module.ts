import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
//import { ProductsModule } from './products/products.module';
// import { ItemsModule } from './items/items.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ensure the config service is available to be injected - no need to keep re-importing
    DatabaseModule,
    UsersModule,
  ],

  controllers: [AppController], // main controller
  providers: [AppService],     // main service
})

export class AppModule {}