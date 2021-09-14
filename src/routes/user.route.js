import { Router } from 'express';

const router = Router();

import userController from '../controllers/user.controller.js';

router
  .get('/:userId', userController.getUserById)
  .post('/', userController.createNewUser);

export default router;
