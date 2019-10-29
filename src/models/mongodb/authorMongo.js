const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({ name: 'string', years: 'number' });
const Author = mongoose.model('AuthorForMigration', authorSchema);

module.exports = Author;
