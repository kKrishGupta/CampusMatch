import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config/env';
import { DatabaseConfig } from './config/database';
import { Logger } from './utils/logger';

import authRoutes from './routes/auth.routes';
import collegeRoutes from './routes/college.routes';
import reviewRoutes from './routes/review.routes';
import compareRoutes from './routes/compare.routes';
import savedRoutes from './routes/saved.routes';

const app = express();

// Permissive CORS setup for Vercel deployments & local testing
const allowedOrigins = [
  'https://campus-match-client.vercel.app',
  'https://campus-match-client-git-main-krish-guptas-projects-5351c1cf.vercel.app',
  'https://campus-match-client-msia81pgr-krish-guptas-projects-5351c1cf.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') ||
        config.clientUrl === '*' ||
        origin === config.clientUrl
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Allow all origins in production
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

  res.status(200).json({
    status: 'OK',
    message: 'CampusMatch API backend operational',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: config.nodeEnv || 'development',
    corsAllowedOrigin: 'https://campus-match-client.vercel.app',
    database: {
      provider: 'MongoDB Atlas',
      connectionState: dbState,
      isConnected: isDbConnected,
    },
    services: {
      auth: 'active (/api/v1/auth)',
      colleges: 'active (/api/v1/colleges)',
      compare: 'active (/api/v1/compare)',
      reviews: 'active (/api/v1/reviews)',
      saved: 'active (/api/v1/saved)',
    },
    version: '1.0.0',
  });
};

app.get('/health', getHealthStatus);
app.get('/api/v1/health', getHealthStatus);

// API v1 Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/colleges', collegeRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/compare', compareRoutes);
app.use('/api/v1/saved', savedRoutes);

// Fallback API Routes
app.use('/api/auth', authRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/compare', compareRoutes);
app.use('/api/saved', savedRoutes);

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: 'CampusMatch Backend API',
    status: 'Running',
    healthCheck: '/health',
    docs: '/api/v1/health',
    allowedClient: 'https://campus-match-client.vercel.app',
  });
});

// 404 Catch-all Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found. Access /health for API docs.',
  });
});

async function bootstrap() {
  Logger.info(`Starting CampusMatch Backend Server...`);
  
  try {
    await DatabaseConfig.connect();
  } catch (err) {
    Logger.error('Database connection notice: running with fallback data if offline', err);
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
