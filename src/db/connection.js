const MongoClient = require('mongodb').MongoClient

const JERY_DB = "mongodb+srv://jery:Uih4f66AsYab9IuE@cluster0-seud7.gcp.mongodb.net/test?retryWrites=true&w=majority"

function connect(url) {
    return MongoClient.connect(url).then(client => client.db('boards'))
}

module.exports = async function() {
    let databases = await Promise.all([connect(JERY_DB)])
    return {
        JERY: databases[0],
    }
}



