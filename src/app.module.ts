import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule for environment variables
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BasketModule } from './basket/basket.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // ConfigModule to load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
      envFilePath: '.env', // Specify the path to the environment variables file
    }),

    // Import application modules
    UsersModule,   // Module for managing users
    BasketModule,  // Module for basket-related functionality
    DatabaseModule, ProductsModule // Module for database configuration and connection
  ],
  controllers: [AppController], // Include main application controller
  providers: [AppService],      // Include main application service
})
export class AppModule {}