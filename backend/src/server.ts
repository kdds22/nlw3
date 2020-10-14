import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection'

const app = express();

app.use(express.json());

/* app.get('/users', (request, response) => {
    return response.json({ "message": "Hello World" });
}); */

app.post('/orphanages', async (request, response) => {
    console.log(request.body);
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);
    
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });

    await orphanagesRepository.save(orphanage);

    return response.json({ "message": "Hello World" });
});

/* app.post('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    
    return response.json({ "message": "Hello World" });
}); */


app.listen(3333);

// QUery: http://localhost:3333/users
// Route Params: http://localhost:3333/users/1
// Body: http://localhost:3333/users
// QUery Params: http://localhost:3333/users?search=klaus