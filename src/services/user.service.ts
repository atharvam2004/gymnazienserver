// services/user.service.ts
import UserModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';

export const createUser = async ({ firstName, lastName, email, password }: IUser): Promise<IUser> => {
  const user = new UserModel({ firstName, lastName, email, password });
  await user.save();
  return user;
};

// Add more user-related service functions as needed
