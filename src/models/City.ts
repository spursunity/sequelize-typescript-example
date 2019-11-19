import {
  Table,
  Column,
  Model,
  BelongsToMany,
  AllowNull,
} from 'sequelize-typescript';

import { Weather } from './Weather';
import { CityWeather } from './CityWeather';

@Table({
  tableName: 'cities',
  underscored: true,
})
export class City extends Model<City> {

  @AllowNull(false)
  @Column
  name!: string;

  @BelongsToMany(() => Weather, () => CityWeather)
  weather!: Weather[];
}
