import axios from 'axios';
// import { db } from '../../src/databases/mysql/config.js';

axios.defaults.baseURL = 'http://localhost:3000';

// jest.mock('axios');

// beforeAll(async () => {
//   await db('users').insert({ id: 1, name: 'Test Name' });
// });

// afterAll(async () => {
//   await db('users').del();
// });

describe('Testing users route: GET requests', () => {
  test('Get user by id 1', async () => {
    const res = await axios.get('/users/1');
    expect({
      id: res.data.id,
      name: res.data.name
    }).toEqual({ id: 1, name: 'Gia Kiet' });
  });
});

// describe('Testing users route: POST request', () => {
//   // afterEach(async () => {
//   //   await db('users').del().where({ id: 2 });
//   // });

//   test('Create new user', async () => {
//     const result = await db('users').insert({ id: 2, name: 'Tu Dinh' });
//     expect(result).toEqual([2]);
//   });
// });
