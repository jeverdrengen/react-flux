"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass({
    render() {
        return (
            <div>
                <h1>Page not found</h1>
                <p>The page you're looking for does not exists</p>
                <Link to="app">Go to the frontpage</Link>
            </div>
        );
    }
});

module.exports = NotFound; 