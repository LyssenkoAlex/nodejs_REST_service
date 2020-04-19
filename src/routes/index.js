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



    return app
}
