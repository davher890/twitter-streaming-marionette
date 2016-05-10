define(['models/tweet'], function(TweetModel){
  return Backbone.Collection.extend({
      model: TweetModel
  });
});
