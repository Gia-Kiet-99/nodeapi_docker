import knex from 'knex';

if (process.env.NODE_ENV !== 'production') {
  const dotenv = await import('dotenv');
  dotenv.config();
}

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  pool: {
    min: process.env.MYSQL_MIN_POOL || 0,
    max: process.env.MYSQL_MAX_POOL || 10,
  },
});

db
  .raw('SELECT \'Something sweet\';')
  .timeout(5000, { cancel: true })
  .then((result) => {
    if (result) {
      console.log('MySQL database connection has been established');
    }
  })
  .catch((err) => {
    if (err) {
      console.log('Can not connect to MySQL database');
    }
  });

function initTables() {
  db.schema.hasTable('users').then((exists) => {
    if (!exists) {
      return db.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.timestamp('created_at').defaultTo(db.fn.now());
        table.timestamp('updated_at').defaultTo(db.fn.now());
      });
    }
    return 0;
  });

  db.schema.hasTable('notes').then((exists) => {
    if (!exists) {
      return db.schema.createTable('notes', (table) => {
        table.increments('id').primary();
        table.string('content').notNullable();
        table.integer('user').unsigned().notNullable()
          .references('users.id')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
          .withKeyName('fk_userid_notes_users');
        table.timestamp('created_at').defaultTo(db.fn.now());
        table.timestamp('updated_at').defaultTo(db.fn.now());
      });
    }
    return 0;
  });
}

export { db, initTables };
// module.exports = { knex, initTables };
