// controllers/user.controller.ts
import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const createUser = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await userService.createUser({ firstName, lastName, email, password });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more user-related controller functions as needed
