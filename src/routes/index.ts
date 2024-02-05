// routes/index.ts
import express, { IRouter } from 'express';
import userRoute from './user.route';
import eventRoute from "./events.routes"
const router = express.Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.use('/event',eventRoute);
  router.use('/users', userRoute);
  // Add more routes as needed
  return router;
};

export default routes;
