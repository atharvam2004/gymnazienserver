import { Schema, model, Document } from 'mongoose';
import { IEvent, IPlayer, IJudge } from '../interfaces/event.interface';

const playerSchema = new Schema<IPlayer>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
});

const judgeSchema = new Schema<IJudge>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
});

const eventSchema = new Schema<IEvent>({
  authorId: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorEmail: {
    type: String,
    required: true,
  },

  playerList: [playerSchema],
  judges: [judgeSchema],
});

interface IEventModel extends IEvent, Document {}

const Event = model<IEventModel>('Event', eventSchema);

export default Event;