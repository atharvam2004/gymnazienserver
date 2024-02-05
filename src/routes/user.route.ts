// routes/user.route.ts
import express, { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

// Create a user
router.post('/', userController.createUser);

// Add more user-related routes as needed

export default router;
