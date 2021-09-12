const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '01635413214',
    database: 'notedb'
  },
  pool: { min: 0, max: 10 }
});

module.exports = knex;
