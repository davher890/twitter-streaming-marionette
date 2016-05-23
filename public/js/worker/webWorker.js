'use strict'
// Open a new web socket connection
// var connection = new WebSocket('ws://localhost:8080');
var host = location.origin.replace(/^http/, 'ws')
var connection = new WebSocket(host);
// Log errors
connection.onerror = function (error) {
  console.log('Web socket error');
};

// Log messages from the server
connection.onmessage = function (e) {
  self.postMessage(e.data);
};

this.addEventListener('message', function(e) {
  connection.send(e.data);
}, false);
