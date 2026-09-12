export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET || 'dev_secret_key',
  mongodbUri: process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/campusmatch_db',
};
