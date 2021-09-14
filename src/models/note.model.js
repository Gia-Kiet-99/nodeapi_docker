import { db } from '../databases/mysql/config.js';

async function all() {
  try {
    return await db('notes');
  } catch (error) {
    throw Error(error);
  }
}

async function add(note) { // note: {user, content}
  try {
    return await db('notes').insert(note);
  } catch (error) {
    throw Error(error);
  }
}

export default {
  all,
  add,
};
