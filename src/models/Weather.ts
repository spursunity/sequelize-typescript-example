import {
  Table,
  Column,
  Model,
  BelongsToMany,
  AllowNull,
} from 'sequelize-typescript';

import { City } from './City';
import { CityWeather } from './CityWeather';

@Table({
  tableName: 'weather',
  underscored: true,
})
export class Weather extends Model<Weather> {

  @AllowNull(false)
  @Column
  type!: string;

  @BelongsToMany(() => City, () => CityWeather)
  cities!: City[];
}
