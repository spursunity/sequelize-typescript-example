import { AuthorOld, connectMongoose } from './db';
import {Author} from './models/mongodb/authorMongo';

(async () => {
  try {
    await connectMongoose();

    const author = await Author.find();

    console.log('author :', author);

    /*await Author.insertMany([
      { name: 'Keane', years: 13 },
      { name: 'Donald', years: 21 },
      { name: 'Fred', years: 34 },
      { name: 'Mark', years: 45 },
      { name: 'Pete', years: 59 },
      { name: 'Brooke', years: 60 },
    ]);*/

    // const newAuthor = await AuthorOld.create({ name: 'John', years: 65 });
    // const oldAuthor = await AuthorOld.findAll({ raw: true });

    console.log('============================');
    // console.log('oldAuthor :', oldAuthor);
    // console.log('newAuthor :', newAuthor);
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()