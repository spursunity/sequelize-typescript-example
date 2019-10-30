const { Sequelize, Model } = require('sequelize');

const { postgres } = require('../../secret/config.js');
const { Author, connectMongoose } = require('../models/mongodb');

const {
  database,
  dialect,
  username,
  password,
  host,
} = postgres;

const sequelize =  new Sequelize({
  database,
  dialect,
  username,
  password,
  host,
});

class AuthorOld extends Model {}
AuthorOld.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Unknown author',
  },
  years: {
    type: Sequelize.NUMBER,
    allowNull: false,
    defaultValue: 0,
  },
}, { sequelize, modelName: 'AuthorOld' });


(async () => {
  try {
    await connectMongoose();

    const authors = await Author.find();

    const postgresAuthors = authors.map((author) => {
      const { name, years } = author;

      return {
        name,
        years,
      };
    });

    await AuthorOld.bulkCreate(postgresAuthors);

    const response = await AuthorOld.findAll({ raw: true });

    console.log('response :', response);
  } catch (error) {
    console.log('error :', error.message);
  }
})();