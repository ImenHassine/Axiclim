import * as dotenv from 'dotenv'

dotenv.config()

export type Configuration = {
  NODE_ENV: string;
  PORT: number;
  WIPSOS_URL: string;
  APP_DATABASE_URL: string;
  APP_LOG_LEVEL: string;
  IDENTIFIANT: string;
  MOTDEPASSE: string;
};

let currentConfig: Configuration = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: +(process.env.PORT || 3000),
    WIPSOS_URL: process.env.WIPSOS_URL || 'http://wipsos-extranet.com',
    APP_DATABASE_URL: process.env.APP_DATABASE_URL || '',
    IDENTIFIANT: process.env.IDENTIFIANT || '',
    MOTDEPASSE: process.env.MOTDEPASSE || '',
    APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || 'info'
  }

export { currentConfig as config }