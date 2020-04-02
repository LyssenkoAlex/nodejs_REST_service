
const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./src/api/api.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4000;

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get(`/users/`, (request, response) => {
    return handlers.getUsers(request, response);
});

app.get(`/users/:id`, (request, response) => {
    return handlers.getUsersById(request, response);
});

app.post(`/users`, (request, response) => {
    return handlers.createUser(request, response);
});

app.put(`/users/:id`, (request, response) => {
    return handlers.updateUser(request, response);
});

app.delete(`/user/:id`, (request, response) => {
    return handlers.deleteUser(request, response);
});









