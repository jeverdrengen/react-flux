"use strict";

var React = require('react');

var About = React.createClass({
    statics: { 
        // willTransitionTo: function (transition, params, query, callback){ 
        //     if(!confirm('Are you sure you want to go there?')){ 
        //         transition.abort();
        //         //return;
        //     }else{ 
        //         callback();
        //     }
        // }, 
        // willTransitionFrom: function (transition, component){ 
        //     if(!confirm('Are you sure you want to see this?')){ 
        //         transition.abort();
        //     }
        // }  
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <ul>
                    <li>React</li>
                    <li>Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;