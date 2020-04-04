const { v4: uuidv4 } = require('uuid');
const dataStore = require("../../data/dataStore.json");

function getTasks (request, response)  {
    return response.json(dataStore.tasks);
}

function getTaskById (request, response)  {
    const id = Number(request.params.id);
    const task = dataStore.tasks.find((task) => task.id === id);
    if (!task) {
        response.status(500).send('Task not found.')
    } else {
        response.status(200).json(task);
    }

    return response.json(task);
}

function createTask (request, response) {
    const incomingTask = request.body;
    incomingTask.id = uuidv4();
    dataStore.tasks.push(incomingTask);

    response.status(200).json(dataStore.tasks);
}

function updateTask(request, response) {
    const id = Number(request.params.id);
    const body = request.body;
    const task = dataStore.tasks.find((task) => task.id === id);
    const index = dataStore.tasks.indexOf(task);

    if (!task) {
        response.status(500).send('Task not found.');
    } else {
        const updatedTask = { ...task, ...body };
        dataStore.tasks[index] = updatedTask;
        response.send(updatedTask);
    }
}

function deleteTask(request, response) {
    const id = Number(request.params.id);
    const newtask = dataStore.tasks.filter((task) => task.id !== id);
    dataStore.tasks = [...newtask] ;

    if (!newtask) {
        response.status(500).send('Task not found.');
    } else {
        response.status(200).send(dataStore.tasks);
    }
}



exports.getTasks = getTasks;
exports.getTaskById = getTaskById;
exports.createTask = createTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
