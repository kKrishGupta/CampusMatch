import mongoose from 'mongoose';
import { config } from './env';
import { Logger } from '../utils/logger';

export class DatabaseConfig {
  public static getConnectionString(): string {
    return config.mongodbUri;
  }

  public static async connect(): Promise<boolean> {
    try {
      const uri = this.getConnectionString();
      await mongoose.connect(uri);
      Logger.info('[Database] MongoDB connected successfully');
      return true;
    } catch (error) {
      Logger.error('[Database] MongoDB connection error:', error);
      throw error;
    }
  }

  public static async disconnect(): Promise<void> {
    await mongoose.disconnect();
    Logger.info('[Database] MongoDB disconnected');
  }
}

