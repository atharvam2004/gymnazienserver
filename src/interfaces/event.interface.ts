import { Document } from 'mongoose';

export interface IEvent extends Document {
  eventHolder: string;
  eventName: string;
  date: Date;
  eventId: string;

}
export interface IPlayer {
  firstName: string;
  lastName: string;
  club: string;
  phoneNo: string;
}

export interface IJudge {
  firstName: string;
  lastName: string;
  phoneNo: string;
}