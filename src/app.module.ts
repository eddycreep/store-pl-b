import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
//import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ensure the config service is available to be injected - no need to keep re-importing

    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.getOrThrow('MYSQL_HOST'),
          port: configService.getOrThrow('MYSQL_PORT'),
          database: configService.getOrThrow('MYSQL_DATABASE'),
          username: configService.getOrThrow('MYSQL_USERNAME'),
          password: configService.getOrThrow('MYSQL_PASSWORD'),
          autoLoadEntities: true,
          // synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'),
      }),
      inject: [ConfigService]  // Injects ConfigService for configuration
    }),

    UsersModule,
  ],

  controllers: [AppController], // main controller
  providers: [AppService],     // main service
})

export class AppModule {}