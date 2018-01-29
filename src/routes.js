"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute name="home" handler={require('./components/home-page')} />
        <Route name="authors" handler={require('./components/authors/author')} />
        <Route name="about" handler={require('./components/about/about')} />
        <Route name="addAuthor" path="author" handler={require('./components/authors/manage-author')} />
        <Route name="editAuthor" path="author/:id" handler={require('./components/authors/manage-author')} />
        <NotFoundRoute handler={require('./components/common/404')} />        
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;