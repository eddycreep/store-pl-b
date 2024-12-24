import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise'; // Using `mysql2/promise` for asynchronous operations
import * as dotenv from 'dotenv'; // Importing dotenv to configure environment variables
import { join } from 'path'; // Importing join to handle file paths

// Loading the .env file from the specified filepath
dotenv.config({ path: join(__dirname, '..', '..', '..', '.env') });

@Injectable()
export class DatabaseService implements OnModuleInit {
  private connection: mysql.Connection; // Declaring a private property for the MySQL connection

  async onModuleInit() {
    // Lifecycle hook that executes when the module initializes
    try {
      this.connection = await mysql.createConnection({
        host: process.env.HOST, // Fetching database host from environment variables
        port: Number(process.env.DB_PORT), // Converting port to a number (3306 for MySQL)
        user: process.env.USER, // Fetching database username
        password: process.env.PASSWORD, // Fetching database password
        database: process.env.DATABASE, // Fetching database name
      });
      console.log('DB connected successfully');
    } catch (error) {
      console.error('Error connecting to DB:', error.message); // Enhanced error logging
      process.exit(1); // Exiting the application on a critical failure
    }
  }

  async query(sql: string, params: any[]): Promise<any> {
    // Method to execute queries using the provided SQL and parameters
    try {
      const [results] = await this.connection.execute(sql, params); // Using execute for parameterized queries
      return results;
    } catch (error) {
      console.error('Error executing query:', error.message); // Logging query errors
      throw new Error('Database query failed'); // Throwing a generic error
    }
  }

  async closeConnection(): Promise<void> {
    // Gracefully closing the database connection
    if (this.connection) {
      await this.connection.end();
      console.log('DB connection closed successfully');
    }
  }
}