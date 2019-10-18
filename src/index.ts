import { sequelize } from './db';
import { AuthorOld } from './models/AuthorOld';

(async () => {
  try {
    await sequelize.sync(); // { force: true }

    // const newAuthor = await AuthorOld.create({ name: 'John', years: 65 });
    const oldAuthor = await AuthorOld.findAll();

    console.log('============================');
    console.log('oldAuthor :', oldAuthor);
    // console.log('newAuthor :', newAuthor);
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()