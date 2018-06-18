var results = { results : [] };
var fs = require('fs');
var express = require('express');
var app = express();

var requestHandler = function (req, res) {
  var headers = defaultCorsHeaders;
  var body = [];
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  console.log(req.url)

  
};
x

//   if (req.method === 'GET'){


//     if (req.url === '/' ) {

//       console.log("a")
//       fs.readFile('D:/immersive/im06-2018-03-chatterbox-client/client/index.html','utf8', function (err, data) {
//         if (!err) {
//           console.log('aa')
//           res.writeHead(200, headers);
//           res.write(data);
//           res.end();
//         } else {
//           console.log('err :' + err)
//         }
//       })
//     } else {
//        res.end(JSON.stringify(results))
//     }
//   } else if (req.method === 'POST' && (req.url === '/classes/messages' || req.url === '/classes/room')) {
//     req.on('data', (chunk) => {
//       body.push(chunk);
//     });

//     req.on('end', () => {
//       try {
//         var data = JSON.parse(body);
//         results["results"].push(data);
//         res.writeHead(201, headers);
//         res.end("posted");
//       } catch (er) {
//         res.writeHead(404, headers);
//         res.end(`error : ${er.message}`)
//       }
//     })
//   } else {
//     res.writeHead(404);
//     res.end("wrong url");
//   }

//   // headers['Content-Type'] = 'application/json';
//   // res.writeHead(statusCode, headers);
// };

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports.requestHandler = requestHandler;







// var results = { results: [] };
// var fs = require('fs');


// var requestHandler = function (req, res) {
//   var headers = defaultCorsHeaders;
//   var body = [];
//   console.log('Serving request type ' + req.method + ' for url ' + req.url);
//   console.log(req.url)

//   if (req.method === 'GET') {


//     if (req.url === '/') {

//       console.log("a")
//       fs.readFile('D:/immersive/im06-2018-03-chatterbox-client/client/index.html', 'utf8', function (err, data) {
//         if (!err) {
//           console.log('aa')
//           res.writeHead(200, headers);
//           res.write(data);
//           res.end();
//         } else {
//           console.log('err :' + err)
//         }
//       })
//     } else {
//       res.end(JSON.stringify(results))
//     }
//   } else if (req.method === 'POST' && (req.url === '/classes/messages' || req.url === '/classes/room')) {
//     req.on('data', (chunk) => {
//       body.push(chunk);
//     });

//     req.on('end', () => {
//       try {
//         var data = JSON.parse(body);
//         results["results"].push(data);
//         res.writeHead(201, headers);
//         res.end("posted");
//       } catch (er) {
//         res.writeHead(404, headers);
//         res.end(`error : ${er.message}`)
//       }
//     })
//   } else {
//     res.writeHead(404);
//     res.end("wrong url");
//   }

//   // headers['Content-Type'] = 'application/json';
//   // res.writeHead(statusCode, headers);
// };

// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10 // Seconds.
// };

// module.exports.requestHandler = requestHandler;