const { v4: uuidv4 } = require('uuid');
const dataStore = require("../../data/dataStore.json");

function getBoards (request, response)  {
    return response.json(dataStore.boards);
}

function getBoardById (request, response)  {
    const id = Number(request.params.id);
    const board = dataStore.boards.find((board) => board.id === id);
    if (!board) {
        response.status(500).send('Board not found.')
    } else {
        response.status(200).json(board);
    }

    return response.json(board);
}

function createBoard (request, response) {
    const incomingBoard = request.body;
    incomingBoard.id = uuidv4();
    dataStore.boards.push(incomingBoard);

    response.status(200).json(dataStore.boards);
}

function updateBoard(request, response) {
    const boardId = Number(request.params.id);
    const body = request.body;
    const board = dataStore.boards.find((board) => board.id === boardId);
    const index = dataStore.boards.indexOf(board);

    if (!board) {
        response.status(500).send('Board not found.');
    } else {
        const updatedBoard = { ...board, ...body };
        dataStore.boards[index] = updatedBoard;
        response.send(updatedBoard);
    }
}

function deleteBoard(request, response) {
    const boardId = Number(request.params.id);



    const newBoard = dataStore.boards.filter((board) => board.id !== boardId);
    dataStore.boards = [...newBoard] ;
    const newTask = dataStore.tasks.filter((task) => task.boardId !== boardId);
    dataStore.tasks = [...newTask];
    if (!newBoard) {
        response.status(500).send('Board not found.');
    } else {
        response.status(200).send(dataStore.boards);
    }
}



exports.getBoards = getBoards;
exports.getBoardById = getBoardById;
exports.createBoard = createBoard;
exports.updateBoard = updateBoard;
exports.deleteBoard = deleteBoard;
