const { v4: uuidv4 } = require('uuid');
const dataStore = require("../../data/dataStore.json");

 function getUsers (request, response)  {
    return response.json(dataStore.users);
}

function getUsersById (request, response)  {
    const userId = Number(request.params.id);
    const user = dataStore.users.find((user) => user.id === userId);
    if (!user) {
        response.status(500).send('User not found.')
    } else {
        response.status(200).json(user);
    }

    return response.json(user);
}

function createUser (request, response) {
    const incomingUser = request.body;
    incomingUser.id = uuidv4();
    dataStore.users.push(incomingUser);
    console.log(dataStore.users);

    response.status(200).json(dataStore.users);
}

function updateUser(request, response) {
    const userId = Number(request.params.id);
    const body = request.body;
    const user = dataStore.users.find((account) => account.id === userId);
    const index = dataStore.users.indexOf(user);

    if (!user) {
        response.status(500).send('User not found.');
    } else {
        const updatedUser = { ...user, ...body };
        dataStore.users[index] = updatedUser;
        response.send(updatedUser);
    }
}

function deleteUser(request, response) {
    const userId = Number(request.params.id);
    const newUsers = dataStore.users.filter((user) => user.id !== userId);
    dataStore.users = [...newUsers] ;

    if (!newUsers) {
        response.status(500).send('User not found.');
    } else {
        response.status(200).send(dataStore.users);
    }
}



exports.getUsers = getUsers;
exports.getUsersById = getUsersById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
