const mongoose = require('mongoose');

const Author = require('./authorMongo.js');
const { mongodb } = require('../../../secret/config.js');

const connectMongoose = async () => {
  mongoose.connection.on('error', () => {
    console.error('__Connection_Error__');
  });

  mongoose.connection.once('open', () => {
    console.log('Connection was established');
  });

  await mongoose.connect(mongodb.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  Author,
  connectMongoose,
};
