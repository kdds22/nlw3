import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.show);
routes.get('/orphanages/:id', upload.array('images'), OrphanagesController.index);

export default routes;