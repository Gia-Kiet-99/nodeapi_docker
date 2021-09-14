import noteModel from '../models/note.model.js';

async function getAll(req, res) {
  const allNotes = await noteModel.all();
  res.json(allNotes);
}

async function postNote(req, res) {
  const { user, content } = req.body;
  const savedNote = await noteModel.add({ user, content });

  res.status(201).json(savedNote);
}

export default {
  getAll,
  postNote,
};
