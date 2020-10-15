import express from 'express';
import 'express-async-errors';
import path from 'path';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// QUery: http://localhost:3333/users
// Route Params: http://localhost:3333/users/1
// Body: http://localhost:3333/users
// QUery Params: http://localhost:3333/users?search=klaus