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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await connectMongoose();
  
      const limit = 2;
      let offset = 0;
  
      const instancesAmount = await Author.count();
  
      while (instancesAmount > offset) {
        const authors = await Author
        .find()
        .skip(offset)
        .limit(limit)
        ;
  
        offset += limit;
  
        const postgresAuthors = authors.map((author) => {
          const { name, years } = author;
  
          return {
            name,
            years,
          };
        });
  
        await AuthorOld.bulkCreate(postgresAuthors);
      }
    } catch (error) {
      console.log('error :', error.message);
    }
  },

  down: (queryInterface, Sequelize) => {}
};
