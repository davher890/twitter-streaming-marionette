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

        events : {
          'click .btn-default' : 'spyHashtag'
        },

        // Get a reference to the channel named 'tweetChannel'
        radioChannel : Radio.channel('tweetChannel'),

        initialize: function() {
          var self = this;
            this.radioChannel.reply('newTweet', function(message) {
                var tweet = JSON.parse(message);
                var tweetModel = new TweetModel()
                tweetModel.attributes = tweet;
                self.collection.add(tweetModel);
            });
        },
        spyHashtag : function(){
          var hashtag = $('input#hashtag').val();
          this.radioChannel.request('hashtag', JSON.stringify({ type : 'hashtag', hashtag : hashtag}));
        }
    });
});
