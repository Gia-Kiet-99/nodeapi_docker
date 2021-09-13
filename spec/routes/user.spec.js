const axios = require('axios');
// const { knex: db } = require('../../src/databases/mysql/config');

axios.defaults.baseURL = 'http://localhost:3000';

// beforeAll(async () => {
//   await db('users').insert({ id: 1, name: 'Test Name' });
// });

// afterAll(async () => {
//   await db('users').del();
// });

describe('Testing users route: GET requests', () => {
  test('Get user by id 1', () => {
    axios.get('/users/1').then(res => {
      const user = res.data;
      return expect({
        id: user.id,
        name: user.name
      }).toEqual({
        id: 1,
        name: 'Gia Kiet'
      });
    });
  });
});
