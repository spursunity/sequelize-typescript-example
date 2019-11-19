import {
  Table,
  Column,
  Model,
  ForeignKey,
  AllowNull,
} from 'sequelize-typescript';

import { City } from './City';
import { Weather } from './Weather';

@Table({
  tableName: 'cities_weather',
  underscored: true,
})
export class CityWeather extends Model<CityWeather> {
 
  @ForeignKey(() => City)
  @AllowNull(false)
  @Column
  cityId!: number;
 
  @ForeignKey(() => Weather)
  @AllowNull(false)
  @Column
  weatherId!: number;
}
