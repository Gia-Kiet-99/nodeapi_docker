const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router
  .get("/:userId", userController.getUserById)
  .post("/", userController.createNewUser);

module.exports = router;
