import {Sequelize} from 'sequelize-typescript';
 
export const sequelize =  new Sequelize({
  database: 'db_name',
  dialect: 'postgres',
  username: 'u_name',
  password: 'pwd',
  host: 'some_host', // or storage: ':memory:',
  models: [__dirname + '/models'],
});