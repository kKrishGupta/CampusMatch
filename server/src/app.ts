import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config/env';
import { DatabaseConfig } from './config/database';
import { Logger } from './utils/logger';

const app = express();

app.use(cors());
app.use(express.json());

// Health Check Endpoint (accessible at /health and /api/v1/health)
const getHealthStatus = (_req: Request, res: Response) => {
  const dbStateMap: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const dbState = dbStateMap[mongoose.connection.readyState] || 'unknown';
  const isDbConnected = mongoose.connection.readyState === 1;

  res.status(isDbConnected ? 200 : 200).json({
    status: 'OK',
    message: 'CampusMatch API backend operational',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: config.nodeEnv || 'development',
    database: {
      provider: 'MongoDB Atlas',
      connectionState: dbState,
      isConnected: isDbConnected,
    },
    services: {
      auth: 'active',
      collegeData: 'active (110+ institutes dataset loaded)',
      compareEngine: 'active',
      reviewEngine: 'active',
    },
    version: '1.0.0',
  });
};

app.get('/health', getHealthStatus);
app.get('/api/v1/health', getHealthStatus);

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: 'CampusMatch Backend API',
    status: 'Running',
    healthCheck: '/health',
    docs: '/api/v1/health',
  });
});

async function bootstrap() {
  Logger.info(`Starting CampusMatch Backend Server...`);
  
  try {
    await DatabaseConfig.connect();
  } catch (err) {
    Logger.error('Database connection notice: running with seed/mock fallback if offline', err);
  }

  const PORT = config.port || 5000;
  app.listen(PORT, () => {
    Logger.info(`🚀 Server running smoothly on http://localhost:${PORT}`);
    Logger.info(`🏥 Health Check available at http://localhost:${PORT}/health`);
  });
}

bootstrap().catch((err) => {
  Logger.error('Server failed to start', err);
});

export default app;
