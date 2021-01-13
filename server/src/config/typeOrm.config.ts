import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.DBHOST || dbConfig.host,
  port: process.env.DBPORT || dbConfig.port,
  username: process.env.DBUSER || dbConfig.username,
  password: process.env.DBPASS || dbConfig.password,
  database: process.env.DBNAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};
