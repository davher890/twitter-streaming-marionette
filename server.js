'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    WebSocketServer = require('ws').Server,
    favicon = require('favicon'),
    path = require('path'),
    http = require('http');

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'PnjhoisROYAZpzz79L8De7ix4',
    consumer_secret: '51myDZg2tkepX7vWF39iW6rRngIVVSToma4toTpVT4mfO5nHTh',
    access_token_key: '251271726-3f29DiLixfTRm8TJMzDKELeDUybDxRO00hw2gdAt',
    access_token_secret: 'zHOyIrgy1UZWMZb4Ew2fwUO8QDQtza6v6iXOJpHBMfdIB'
});

var port = process.env.PORT || 5000

var app = express();

var server = http.createServer(app)
server.listen(port)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', express.static(__dirname + '/public'));
app.use(methodOverride());
app.set('view engine', 'html');

// app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

var wss = new WebSocketServer({
    server: server
});

var myStream;
// Wait for connection to become established.
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(incMessage, flags) {
        var data = JSON.parse(incMessage).hashtag;
        console.log('Change twitter hastag', data);

        if (myStream){
          myStream.destroy();
        }

        /**
         * Stream statuses filtered by keyword
         * number of tweets per second depends on topic popularity
         **/
        client.stream('statuses/filter', {
            track: data
        }, function(stream) {
            myStream = stream;
            stream.on('data', function(tweet) {
              //console.log(tweet);
              ws.send(JSON.stringify(tweet), function ack(error) {
                  // if error is not defined, the send has been completed,
                  // otherwise the error object will indicate what failed.
                  if (error != undefined) {
                      console.log('Error sending message', error);
                  }
              });
            });

            stream.on('error', function(error) {
                console.log('Twitter streaming error', error);
            });
        });

    });
    ws.on('close', function close() {
        console.log('close connection');
    });
});

// Get environment
// var env = process.env.NODE_ENV | 'development';
// var port = process.env.PORT;// | 3000;
//
// app.listen(port, function() {
//     console.log('Express server listening on port ', this.address().port);
// });

module.exports = app;
