import express from 'express';

import './database/connection'

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    return response.json({ "message": "Hello World" });
});

/* app.post('/users', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    
    return response.json({ "message": "Hello World" });
}); */

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