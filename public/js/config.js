// Use ECMAScript 5 Strict Mode
"use strict";

var require = {
    paths: {
        templates            : '../templates',
        lib                  : '../lib',
        jquery               : '../lib/jquery/jquery-2.0.0.min',
        jqueryUICore         : '../lib/jquery-ui/jquery.ui.core',
        jqueryUIWidget       : '../lib/jquery-ui/jquery.ui.widget',
        jqueryUIMouse        : '../lib/jquery-ui/jquery.ui.mouse',
        jqueryUIPosition     : '../lib/jquery-ui/jquery.ui.position',
        jqueryUIAutocomplete : '../lib/jquery-ui/jquery.ui.autocomplete',
        jqueryUIDatepicker   : '../lib/jquery-ui/jquery.ui.datepicker',
        underscore           : '../lib/underscore/underscore-1.4.4',
        underscoreString     : '../lib/underscore/underscore.string',
        backbone             : '../lib/backbone/backbone-1.1.2',
        modelbinding         : '../lib/backbone/backbone.modelbinding',
        backboneModelBinding : '../lib/backbone/backbone.modelbinder-1.0.0-min',
        visualsearch         : '../lib/visualsearch/visualsearch',
        marionette           : '../lib/backbone/backbone.marionette-3.0.0-rc1',
        radio                : '../lib/backbone/backbone.radio',
        babysitter           : '../lib/backbone/backbone.babysitter',
        text                 : '../lib/require/text',
        domReady             : '../lib/require/domReady',
        json                 : '../lib/utils/json2',
        bootstrap            : '../lib/bootstrap/bootstrap',
        datejs               : '../lib/utils/date',
        moment               : '../lib/utils/moment.min-2.0.0',
        prettyJson           : '../lib/utils/pretty-json-min',
        jsonView             : '../lib/utils/jquery.jsonview',
        leaflet              : '../lib/leaflet/leaflet-src',
        d3                   : '../lib/d3/d3',
        vivagraph            : '../lib/vivagraph/vivagraph',
        slimScroll           : '../lib/slimScroll/slimscroll.min',
        momentjs             : '../lib/moment/moment',
        jv                   : '../lib/utils/jquery.json-view',
        d3_cloud             : '../lib/d3/d3.layout.cloud'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ["jquery"]
        },
        visualsearch: {
            deps: ['backbone', 'jqueryUIAutocomplete']
        },
        marionette: {
            deps: ['backbone']
        },
        slimScroll : {
            deps: ["jquery"]
        },
        jv : {
            deps: ["jquery"]
        },
        d3_cloud : {
            deps : ["d3"]
        }
    },
    onError: function(err) {
        console.error('Unable to loads module(s): ', err.requireModules);
        require.undef(err.requireModules); //this might be an array?
        console.log('Here are some more details: ', err);
    }
};

// Setup namespacing
if (typeof mv == 'undefined') {
    window.mv = { //instanciate namespace for application
        views: {},
        models: {},
        collections: {},
        helpers: {},
        i: { //for instaciated objects
            views: {},
            router: null
        }
    };
}
