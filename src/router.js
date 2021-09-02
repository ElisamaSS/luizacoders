import { Router } from "express";
import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import authMiddlewares from "./app/middlewares/auth";
import AppointmentsController from "./app/controller/AppointmentsController";

// para iniciar -> npm run dev
const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

// invocando middlewares (meio de campo)
routes.use(authMiddlewares);
routes.get('/', UserController.index);

routes.put('/put', UserController.update);

routes.post('/appointments', AppointmentsController.store);

export default routes;