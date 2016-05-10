define([
    'text!views/templates/tweet.tpl',
    'models/tweet',
    'core'
], function(Template, TweetModel) {

    return Marionette.ItemView.extend({
      template : Template,
      model: TweetModel
    });
});
