const { knex: db } = require("../databases/mysql/config");

async function all() {
  try {
    return await db("notes");
  } catch (error) {
    throw Error(error);
  }
}

async function add(note) { // note: {user, content}
  try {
    return await db("notes").insert(note);
  } catch (error) {
    throw Error(error);
  }
}

module.exports = {
  all,
  add
}
