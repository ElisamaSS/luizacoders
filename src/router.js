import { Router } from "express";
import multer from "multer";
import multerConfig from './config/multer'
import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import authMiddlewares from "./app/middlewares/auth";
import AppointmentsController from "./app/controller/AppointmentsController";
import FileController from "./app/controller/FileController";
import NotificationController from "./app/controller/NotificationController";

import swaggerUI from 'swagger-ui'
import swaggerDocument from '../swagger'


// para iniciar -> npm run dev
const routes = new Router();
const upload = multer( multerConfig )

routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

// invocando middlewares (meio de campo)
routes.use(authMiddlewares);
routes.get('/', UserController.index);

routes.put('/put', UserController.update);

routes.post('/appointments', AppointmentsController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/notifications'/ NotificationController.index);

routes.put('/notifications/:id'/ NotificationController.update);

export default routes;