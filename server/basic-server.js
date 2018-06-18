/* Import node's http module: */
const http = require('http');
const express = require('express');
const reqHandler = require("./request-handler");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


const port = 3000;
const ip = '127.0.0.1';

app.use('/static', express.static(path.join(__dirname + '/public')));
// app.use(bodyParser)
app.use(bodyParser.json());

// const storage = 

app.get('/classes/messages', (req, res) => {
    res.send('hi');
    res.end();

})

// app.post()

// const handleRequest = reqHandler.requestHandler;
// var server = http.createServer(handleRequest);
console.log('Listening on http://' + ip + ':' + port);
app.listen(port, ip);
