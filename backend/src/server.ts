import express from 'express';

import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);

// QUery: http://localhost:3333/users
// Route Params: http://localhost:3333/users/1
// Body: http://localhost:3333/users
// QUery Params: http://localhost:3333/users?search=klaus