import { Router } from 'express';
import noteController from '../controllers/note.controller.js';

const router = Router();

router
  .get('/', noteController.getAll)
  .post('/', noteController.postNote);

export default router;
