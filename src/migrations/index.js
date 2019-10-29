const { Client } = require('pg');

const { postgres } = require('../../secret/config.js');
const { Author, connectMongoose } = require('../models/mongodb');

(async () => {
  try {  
    let query = 'INSERT INTO "AuthorOlds" (name, years) VALUES ';

    await connectMongoose();

    const a = await Author.find();

    const client = new Client({ connectionString: postgres.url });

    await client.connect();

    a.forEach((q, index) => {
      const end = index + 1 === a.length ? ';' : ', ';
      query += `('${q.name}', ${q.years})${end}`;
    });

    await client.query(query);

    client.end();
  } catch (error) {
    console.log('error :', error.message);
  }
})();