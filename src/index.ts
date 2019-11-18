
import { AuthorOld, connectMongoose, tName } from './db';

(async () => {
  try {
    // const newAuthor = await AuthorOld.create({ name: 'John', years: 65 });
    // const oldAuthor = await AuthorOld.findAll({ raw: true });
    const name = tName.create({ authors: [40, 41] , bookTitle: 'Gloves' });

    console.log('============================');
    // console.log('oldAuthor :', oldAuthor);
    // console.log('newAuthor :', newAuthor);
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()
