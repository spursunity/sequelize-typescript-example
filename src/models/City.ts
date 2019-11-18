import {
  Table,
  Column,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';

import { Weather } from './Weather';
import { CityWeather } from './CityWeather';

@Table({
  tableName: 'cities',
  underscored: true,
})
export class City extends Model<City> {
 
  @Column
  name!: string;

  @BelongsToMany(() => Weather, () => CityWeather)
  weather!: Weather[];
}
