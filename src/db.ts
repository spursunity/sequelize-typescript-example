import {Sequelize} from 'sequelize-typescript';

import { postgres } from '../secret/config';

import { City } from './models/City';
import { CityWeather } from './models/CityWeather';
import { Weather } from './models/Weather';

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

sequelize.addModels([
  City,
  CityWeather,
  Weather,
]);

export { City, Weather };
