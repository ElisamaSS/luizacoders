import { Router } from "express";
import multer from "multer";
import multerConfig from './config/multer'
import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import authMiddlewares from "./app/middlewares/auth";
import AppointmentsController from "./app/controller/AppointmentsController";
import FileController from "./app/controller/FileController";

// para iniciar -> npm run dev
const routes = new Router();
const upload = multer( multerConfig )


routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

// invocando middlewares (meio de campo)
routes.use(authMiddlewares);
routes.get('/', UserController.index);

routes.put('/put', UserController.update);

routes.post('/appointments', AppointmentsController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;