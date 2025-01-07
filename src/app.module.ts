import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
//import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Users } from './users/entities/user.entity';
import { UsersActivity } from './users/entities/user-activity.entity';
import { CacheModule } from '@nestjs/cache-manager';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      ttl: +process.env.CACHE_EXPIRATION_TIME,
      max: +process.env.CACHE_MAX_ITEMS,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Users, UsersActivity],
      synchronize: true,
      retryAttempts: 100,
      retryDelay: 2000,
      extra: {
        connectionLimit: 100000,
      },
    }),
    UsersModule
  ],
  controllers: [],
  providers: [
    AppService,
    AppController,
  ],
})
export class AppModule { }