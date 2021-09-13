const express = require('express');

const router = express.Router();

const noteController = require('../controllers/note.controller');

router
  .get('/', noteController.getAll)
  .post('/', noteController.postNote);

module.exports = router;
