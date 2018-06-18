const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000; 
const bodyparser = require('body-parser');

app.use(bodyparser.json()); 
app.use(cors())

var storage = {results : []};

app.get('/classes/messages', function(req, res){
    console.log('hello');
    res.send(JSON.stringify(storage.results)); 
})

app.post('/classes/messages', function (req, res) {
    storage.results.push(req.body);
    console.log(storage.results);
    res.send(JSON.stringify(storage.results)); 
})

app.listen(port, function() {
    console.log('express Listening on http://' + ':' + port);
})
