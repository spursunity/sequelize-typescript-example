import {Schema, model} from 'mongoose';

const authorSchema = new Schema({ name: 'string', years: 'number' });
export const Author = model('AuthorForMigration', authorSchema);
