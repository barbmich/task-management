import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DBHOST,
  port: parseInt(process.env.DBPORT, 10),
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
};
