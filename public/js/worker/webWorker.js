'use strict'
// Open a new web socket connection
var connection = new WebSocket('ws://localhost:8080');

// Log errors
connection.onerror = function (error) {
  console.log('Web socket error');
};

// Log messages from the server
connection.onmessage = function (e) {
  var data = JSON.parse(e.data);
  self.postMessage(JSON.stringify(data));
};

this.addEventListener('message', function(e) {
  var data = JSON.parse(e.data);
  connection.send(JSON.stringify(data));
}, false);
