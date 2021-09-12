const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '01635413214',
    database: 'notedb'
  },
  pool: {
    min: 0,
    max: 10,
  }
});

knex
  .raw('SELECT \'Something sweet\';')
  .timeout(5000, { cancel: true })
  .then(result => {
    if (result) {
      console.log('MySQL database connection has been established');
    }
  })
  .catch(err => {
    if (err) {
      console.log('Can not connect to MySQL database');
    }
  });

function initTables() {
  knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    }
  });

  knex.schema.hasTable('notes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('notes', function (table) {
        table.increments('id').primary();
        table.string('content').notNullable();
        table.integer('user').unsigned().notNullable()
          .references('users.id')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
          .withKeyName('fk_userid_notes_users');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    }
  });
}

module.exports = { knex, initTables };
