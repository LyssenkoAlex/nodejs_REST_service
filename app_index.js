
let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json({type:'application/json'}));

router.get('/', function(req, res) {
    res.statusCode = 200;
    res.send('OK-2')
});
router.post('/', function(req, res) {
    console.log('body: ', req.body);
    res.statusCode = 200;
    res.json('OK')
});

app.get('/id', function (req, res) {
     console.log('req.body: ',req.body );
    res.statusCode = 200;
    res.json('FOUND')
});



module.exports = app;
