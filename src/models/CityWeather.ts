import {
  Table,
  Column,
  Model,
  ForeignKey,
} from 'sequelize-typescript';

import { City } from './City';
import { Weather } from './Weather';

@Table({
  tableName: 'cities_weather',
  underscored: true,
})
export class CityWeather extends Model<CityWeather> {
 
  @ForeignKey(() => City)
  @Column
  cityId!: number;
 
  @ForeignKey(() => Weather)
  @Column
  weatherId!: number;
}
