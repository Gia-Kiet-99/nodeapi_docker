const userModel = require("../models/user.model");

async function getUserById(req, res, next) {
  const { userId } = req.params;
  const user = await userModel.single(userId);

  res.json(user);
}

async function createNewUser(req, res, next) {
  const { name } = req.body;
  const savedUser = await userModel.add({ name });

  res.json(savedUser);
}

module.exports = {
  getUserById,
  createNewUser
}