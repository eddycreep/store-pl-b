import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      connectTimeout: 120000,
  });  
  }

  async query(sql: string, params: any[]) {
    try {
        const [results] = await this.pool.execute(sql, params);
        return results;
    } catch (error) {
        console.error('Database query error:', {
            message: error.message,
            code: error.code,
            stack: error.stack,
        });
        throw error;
    }
  }

  async onModuleInit() {
    let attempts = 5;
    while (attempts > 0) {
        try {
            const connection = await this.pool.getConnection();
            console.log('Database has been connected successfully');
            connection.release();
            return;
        } catch (error) {
            console.error(`Failed to connect to database. Retries left: ${--attempts}`);
            if (attempts === 0) throw error;
        }
    }
  }
}