const http = require('http');
const express = require('express');
const reqHandler = require("./request-handler");
var app = express(); 






app.use(express.static('server'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
