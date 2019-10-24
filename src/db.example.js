import {Sequelize} from 'sequelize-typescript';

import { AuthorOld } from './models/AuthorOld';
 
export const sequelize =  new Sequelize({
  database: 'db_name',
  dialect: 'postgres',
  username: 'u_name',
  password: 'pwd',
  host: 'some_host',
});

sequelize.addModels([AuthorOld]);

export { AuthorOld };
