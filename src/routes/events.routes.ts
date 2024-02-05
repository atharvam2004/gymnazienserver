import express, { Request, Response } from 'express';
import * as eventController from '../controllers/event.controller';

const router = express.Router();

// Create an event
router.post('/', eventController.createEvent);
// Get all events
router.get('/', eventController.getAllEvents);
// Get a single event by ID
router.get('/:id', eventController.getEventById);
// Update an event by ID
router.put('/:id', eventController.updateEvent);

// Delete an event by ID
router.delete('/:id', eventController.deleteEvent);

export default router;
