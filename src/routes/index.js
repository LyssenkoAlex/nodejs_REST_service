const { v4: uuidv4 } = require('uuid');

module.exports = function(app, dbs) {

    app.get('/users', (req, res) => {
        console.log('start')
        dbs.JERY.collection('user').find({}).toArray((err, docs) => {
            if (err) {
                console.log(err)
                res.error(err)
            } else {
                console.log('docs', docs)
                res.json(docs)
            }
        })
    })

    app.post('/users', (req, res) => {
        const incomingUser = req.body;
        incomingUser.id = uuidv4();

        dbs.JERY.collection('user').insertOne(incomingUser, (err, docs) => {
            if (err) {
                console.log(err)
                res.error(err)
            } else {
                console.log('docs', docs)
                res.json(docs)
            }
        })

    })


    app.get('/boards', (req, res) => {
        console.log('start')
        dbs.JERY.collection('boards').find({}).toArray((err, docs) => {
            if (err) {
                console.log(err)
                res.error(err)
            } else {
                console.log('docs', docs)
                res.json(docs)
            }
        })
    })

    app.get('/tasks', (req, res) => {
        console.log('start')
        dbs.JERY.collection('tasks').find({}).toArray((err, docs) => {
            if (err) {
                console.log(err)
                res.error(err)
            } else {
                console.log('docs', docs)
                res.json(docs)
            }
        })
    })








    return app
}
