import {
  Table,
  Column,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';

import { City } from './City';
import { CityWeather } from './CityWeather';

@Table({
  tableName: 'weather',
  underscored: true,
})
export class Weather extends Model<Weather> {
 
  @Column
  type!: string;

  @BelongsToMany(() => City, () => CityWeather)
  cities!: City[];
}
