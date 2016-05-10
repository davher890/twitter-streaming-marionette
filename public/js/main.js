// Define jQuery as AMD module
define.amd.jQuery = true;

define([
	'router',
	'app'
], function(Router, App) {
	window.GlobalApp = App;
	App.start();
	App.router = new Router();

	Backbone.history.start();
});
