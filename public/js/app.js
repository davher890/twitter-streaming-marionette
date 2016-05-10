define(['core', 'radio'],
function(core, Radio) {

  var App = new Backbone.Marionette.Application;
  App.addRegions({
      centerRegion : '#center-container'
  });

  // Get a reference to the channel named 'tweetChannel'
  var radioChannel = Radio.channel('tweetChannel');

  // Create the web worker
  var worker = new Worker("/js/worker/webWorker.js");

  worker.addEventListener('message', function (workerEvent) {
    var tweet = JSON.parse(workerEvent.data);
    radioChannel.request('newTweet', tweet);
  }, false);

  return App;
});
