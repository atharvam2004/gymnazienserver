// controllers/event.controller.ts
import { Request, Response } from 'express';
import * as eventService from '../services/event.service';

export const createEvent = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const {  eventName, date,   authorEmail,  playerList, judges } = req.body;
    const event = await eventService.createEventService({
      eventName, 
      date,
      authorEmail,
      playerList,
      judges,
    });
    return res.status(201).json(event);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllEvents = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const events = await eventService.getAllEventsService();
    return res.json(events);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getEventById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const eventId = req.params.id;
    const event = await eventService.getEventByIdService(eventId);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    return res.json(event);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateEvent = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const eventId = req.params.id;
    const { eventHolder, eventName, date, authorName, authorEmail, authorUserId, playerList, judges } = req.body;
    const updatedEvent = await eventService.updateEventService(eventId, {
      eventHolder,
      eventName,
      date,
      authorName,
      authorEmail,
      authorUserId,
      playerList,
      judges,
    });

    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    return res.json(updatedEvent);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteEvent = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await eventService.deleteEventService(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    return res.json(deletedEvent);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
