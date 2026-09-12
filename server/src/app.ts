import { config } from './config/env';
import { DatabaseConfig } from './config/database';
import { Logger } from './utils/logger';

async function bootstrap() {
  Logger.info(`Starting CampusMatch Backend Server on port ${config.port}...`);
  await DatabaseConfig.connect();
  Logger.info('Server architecture initialized successfully');
}

bootstrap().catch((err) => {
  Logger.error('Server failed to start', err);
});
