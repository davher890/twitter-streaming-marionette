define([
    'text!views/templates/tweetsCompositeView.tpl',
    'views/tweetItemView',
    'collections/tweets',
    'models/tweet',
    'radio',
    'core'
], function(Template, TweetItemView, TweetCollection, TweetModel, Radio) {

    return Marionette.CompositeView.extend({
        template: Template,
        childView: TweetItemView,
        childViewContainer: '#tweet-list',

        // Get a reference to the channel named 'tweetChannel'
        radioChannel : Radio.channel('tweetChannel'),

        initialize: function() {
          var self = this;
            this.radioChannel.reply('newTweet', function(tweet) {
                console.log(tweet);
                var tweetModel = new TweetModel()
                tweetModel.attributes = tweet;
                self.collection.add(tweetModel);
            });
        }
    });
});
