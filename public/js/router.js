define(['views/tweetsCompositeView', 'collections/tweets', 'core'],
    function(TweetsView, TweetCollection) {
        return Backbone.Router.extend({

            routes: {
                '': 'initStreaming',
            },
            initStreaming: function() {

              var tweetsView = new TweetsView({
                collection : new TweetCollection()
              });
                // Clean the app regions
                GlobalApp.centerRegion.show(tweetsView);
            }
        });
    });
