import {Sequelize} from 'sequelize-typescript';
import {connection, connect} from 'mongoose';

import { AuthorOld } from './models/AuthorOld';
import { tName } from './models/TestName';
import { postgres, mongodb } from '../secret/config';

const {
  database,
  username,
  password,
  host,
} = postgres;
 
export const sequelize =  new Sequelize({
  database,
  dialect: 'postgres',
  username,
  password,
  host,
});

sequelize.addModels([AuthorOld, tName]);

export { AuthorOld, tName };

export const connectMongoose = async () => {
  connection.on('error', () => {
    console.error('__Connection_Error__');
  });

  connection.once('open', () => {
    console.log('Connection was established');
  });

  await connect(mongodb.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
