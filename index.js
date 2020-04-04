
const express = require('express');
const bodyParser = require('body-parser');
const handlersUsers = require('./src/api/users/api.js');
const handlersBoards = require('./src/api/boards/api');
const handlersTasks = require('./src/api/tasks/api.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4000;

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get(`/users/`, (request, response) => {
    return handlersUsers.getUsers(request, response);
});

app.get(`/users/:id`, (request, response) => {
    return handlersUsers.getUsersById(request, response);
});

app.post(`/users`, (request, response) => {
    return handlersUsers.createUser(request, response);
});

app.put(`/users/:id`, (request, response) => {
    return handlersUsers.updateUser(request, response);
});

app.delete(`/user/:id`, (request, response) => {
    return handlersUsers.deleteUser(request, response);
});

app.get(`/boards/`, (request, response) => {
    return handlersBoards.getBoards(request, response);
});

app.get(`/boards/:id`, (request, response) => {
    return handlersBoards.getBoardById(request, response);
});

app.post(`/boards`, (request, response) => {
    return handlersBoards.createBoard(request, response);
});

app.put(`/boards/:id`, (request, response) => {
    return handlersBoards.updateBoard(request, response);
});

app.delete(`/boards/:id`, (request, response) => {
    return handlersBoards.deleteBoard(request, response);
});

app.get(`/tasks/`, (request, response) => {
    return handlersTasks.getTasks(request, response);
});

app.get(`/tasks/:id`, (request, response) => {
    return handlersTasks.getTaskById(request, response);
});

app.post(`/tasks`, (request, response) => {
    return handlersTasks.createTask(request, response);
});

app.put(`/tasks/:id`, (request, response) => {
    return handlersTasks.updateTask(request, response);
});

app.delete(`/tasks/:id`, (request, response) => {
    return handlersTasks.deleteTask(request, response);
});












