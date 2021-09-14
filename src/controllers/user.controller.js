import userModel from '../models/user.model.js';

async function getUserById(req, res) {
  const { userId } = req.params;

  const user = await userModel.single(userId);
  if (user === null) {
    return res.status(204).json();
  }

  res.json(user);
}

async function createNewUser(req, res) {
  const { name } = req.body;
  const savedUser = await userModel.add({ name });

  res.json(savedUser);
}

export default {
  getUserById,
  createNewUser,
};
