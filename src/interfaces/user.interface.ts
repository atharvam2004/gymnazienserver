// interfaces/user.interface.ts
import { Document } from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

}

export interface IUserModel extends IUser, Document {}
