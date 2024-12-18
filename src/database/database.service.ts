import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.HOST || 'localhost', // Default to 'localhost' if undefined
      user: process.env.USER || 'root',
      password: process.env.PASSWORD || '',
      database: process.env.DATABASE || 'test',
    });
  }

  async query(sql: string, params: any[]) {
    const [results] = await this.pool.execute(sql, params);
    return results;
  }

  async onModuleInit() {
    try {
      const connection = await this.pool.getConnection();
      console.log('Database has been connected successfully');
      connection.release();
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
      throw error;
    }
  }
}