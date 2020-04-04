
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

app.get(`/user/:id`, (request, response) => {
    return handlersUsers.getUsersById(request, response);
});

app.post(`/user`, (request, response) => {
    return handlersUsers.createUser(request, response);
});

app.put(`/user/:id`, (request, response) => {
    return handlersUsers.updateUser(request, response);
});

app.delete(`/user/:id`, (request, response) => {
    return handlersUsers.deleteUser(request, response);
});

app.get(`/boards/`, (request, response) => {
    return handlersBoards.getBoards(request, response);
});

app.get(`/board/:id`, (request, response) => {
    return handlersBoards.getBoardById(request, response);
});

app.post(`/board`, (request, response) => {
    return handlersBoards.createBoard(request, response);
});

app.put(`/board/:id`, (request, response) => {
    return handlersBoards.updateBoard(request, response);
});

app.delete(`/board/:id`, (request, response) => {
    return handlersBoards.deleteBoard(request, response);
});

app.get(`/tasks/`, (request, response) => {
    return handlersTasks.getTasks(request, response);
});

app.get(`/task/:id`, (request, response) => {
    return handlersTasks.getTaskById(request, response);
});

app.post(`/task`, (request, response) => {
    return handlersTasks.createTask(request, response);
});

app.put(`/task/:id`, (request, response) => {
    return handlersTasks.updateTask(request, response);
});

app.delete(`/task/:id`, (request, response) => {
    return handlersTasks.deleteTask(request, response);
});












