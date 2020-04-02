
const dataStore = require("../data/dataStore.json");

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



exports.getUsers = getUsers;
exports.getUsersById = getUsersById;
