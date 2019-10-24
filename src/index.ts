import { AuthorOld } from './db';

(async () => {
  try {

    // const newAuthor = await AuthorOld.create({ name: 'John', years: 65 });
    const oldAuthor = await AuthorOld.findAll({ raw: true });

    console.log('============================');
    console.log('oldAuthor :', oldAuthor);
    // console.log('newAuthor :', newAuthor);
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()