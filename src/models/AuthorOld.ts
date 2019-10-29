import {Table, Column, Model, AllowNull, Default} from 'sequelize-typescript';

@Table
export class AuthorOld extends Model<AuthorOld> {
 
  @Column
  @AllowNull(false)
  @Default('Unknown author')
  name: string;
 
  @Column
  @AllowNull(false)
  @Default(0)
  years: number;
}
