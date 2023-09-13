import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'mongoose';

@Injectable()
export class MongooseService {
  private dbConnection: Connection;

  constructor() {
    this.createConnectionDB();
  }

  createConnectionDB() {
    const DB_URI = 'mongodb://localhost:27017/manageCostDb';

    this.dbConnection = createConnection(DB_URI);

    this.dbConnection.once('open', () => {
      console.log('Connected to MongoDB');
    });

    this.dbConnection.once('error', () => {
      console.log('Error connecting to MongoDB');
    });
  }

  getConnection(): Connection {
    return this.dbConnection;
  }
}
