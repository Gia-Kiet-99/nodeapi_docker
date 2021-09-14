import { db } from '../databases/mysql/config.js';

async function single(userId) {
  try {
    const users = await db('users').where({ id: userId });
    return users.length ? users[0] : null;
  } catch (error) {
    throw Error(error);
  }
}

async function add(user) { // user: {name}
  try {
    return await db('users').insert(user);
  } catch (error) {
    throw Error(error);
  }
}

export default {
  single,
  add,
};
