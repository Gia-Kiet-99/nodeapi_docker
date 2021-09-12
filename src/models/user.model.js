const { knex: db } = require("../databases/mysql/config");

async function single(userId) {
  try {
    return await db("users").where({ id: userId });
  } catch (error) {
    throw Error(error);
  }
}

async function add(user) { // user: {name}
  try {
    return await db("users").insert(user);
  } catch (error) {
    throw Error(error);
  }
}

module.exports = {
  single,
  add
}
