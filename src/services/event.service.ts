// services/event.service.ts
import Event from '../models/event.model';
import { v4 as uuidv4 } from 'uuid';
import userModel from '../models/user.model';

export const createEventService = async (eventData: any): Promise<any> => {
  const authorData=await userModel.findOne({email:eventData.email})

  eventData={...eventData,eventId:uuidv4(), authorName:authorData.firstName+" "+authorData.lastName, authorId:authorData._id}
  const event = new Event(eventData);
  await event.save();
  return event;
};

export const getAllEventsService = async (): Promise<any[]> => {
  const events = await Event.find();
  return events;
};

export const getEventByIdService = async (eventId: string): Promise<any | null> => {
  const event = await Event.findById(eventId);
  return event;
};

export const updateEventService = async (eventId: string, eventData: any): Promise<any | null> => {
  const updatedEvent = await Event.findByIdAndUpdate(
    eventId,
    { ...eventData },
    { new: true }
  );
  return updatedEvent;
};

export const deleteEventService = async (eventId: string): Promise<any | null> => {
  const deletedEvent = await Event.findByIdAndRemove(eventId);
  return deletedEvent;
};
