import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
//import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Users } from './users/entities/user.entity';


@Module({
  imports: [
    //ConfigModule.forRoot({ isGlobal: true }), // ensure the config service is available to be injected - no need to keep re-importing

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log('Database username:', configService.get('MYSQL_USERNAME'));
        console.log('Database host:', configService.get('HOST'));
        console.log('Database PASSWORD:', configService.get('PASSWORD'));
        console.log('Database DATABASE:', configService.get('DATABASE'));
        console.log('Database PORT:', configService.get('PORT'));
        console.log('Database PORT:', configService.get('MYSQL_PORT'));

        // Return the TypeORM configuration
        return {
          type: 'mysql',
          host: configService.get('HOST'),
          port: +configService.get('MYSQL_PORT'),
          username: configService.get('MYSQL_USERNAME'),
          password: configService.get('PASSWORD'),
          database: configService.get('DATABASE'),
          entities: [Users],
        };
      },
      inject: [ConfigService],
    }),

    UsersModule,
  ],

  controllers: [AppController], // main controller
  providers: [AppService],     // main service
})
export class AppModule {}