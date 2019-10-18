import {Table, Column, Model} from 'sequelize-typescript';

@Table
export class AuthorOld extends Model<AuthorOld> {
 
  @Column
  name: string;
 
  @Column
  years: number;
}
