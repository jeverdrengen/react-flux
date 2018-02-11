"use strict";

//$ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initialize-actions');

InitializeActions.initApp();
// Router.HistoryLocation
Router.run(routes, function(Handler){ 
    React.render(<Handler />, document.getElementById('app'));
});