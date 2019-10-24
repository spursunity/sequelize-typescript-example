import { Table, Column, Model, AllowNull, Default } from 'sequelize-typescript';

@Table
export class AuthorOld extends Model<AuthorOld> {
 
  @Column
  name: string;
 
  @Column
  years: number;

  @Default(0)
  @AllowNull(false)
  @Column
  books_count: number;
}
