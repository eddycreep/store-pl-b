import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule for environment variables
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BasketModule } from './basket/basket.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ // ConfigModule to load environment variables
      isGlobal: true, // globally available
      envFilePath: '.env', // path to the environment variables file
    }),

    // import modules
    UsersModule,  
    BasketModule, 
    DatabaseModule, ProductsModule, AdminModule
  ],
  controllers: [AppController], // main controller
  providers: [AppService],      // main service
})

export class AppModule {}