import { config } from 'dotenv';
import { cwd, env } from 'process';
import { DataSourceOptions } from 'typeorm';

config({ path: `${cwd()}/.env` });

const {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_SYNCHRONIZE,
  DB_USERNAME,
  NODE_ENV
} = env;

const ormConfig: DataSourceOptions = {
  database: DB_NAME,
  entities: [__dirname + '/database/entities/*.entity.{js,ts}'],
  host: DB_HOST,
  logging: NODE_ENV === 'dev' ? 'all' : ['error', 'warn'],
  migrations: [__dirname + '/database/migrations/*.{js,ts}'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  password: DB_PASSWORD,
  port: parseInt(DB_PORT) || 3306,
  synchronize: Boolean(JSON.parse(DB_SYNCHRONIZE)),
  type: 'mysql',
  username: DB_USERNAME
};

export default ormConfig;
