import { AuthorOld } from './db';

(async () => {
  try {

    const newAuthor = await AuthorOld.create({ name: 'Nick', years: 10, books_count: 9 });
    const oldAuthor = await AuthorOld.findAll({ raw: true });

    console.log('============================');
    console.log('oldAuthor :', oldAuthor);
    // console.log('newAuthor :', newAuthor);
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()