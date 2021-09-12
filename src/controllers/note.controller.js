const noteModel = require("../models/note.model");

async function getAll(req, res, next) {
  const allNotes = await noteModel.all();
  res.json(allNotes);
}

async function postNote(req, res, next) {
  const { user, content } = req.body;
  const savedNote = await noteModel.add({ user, content });

  res.status(201).json(savedNote);
}

module.exports = {
  getAll,
  postNote,
};
