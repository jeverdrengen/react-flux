"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./author-form');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthor = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics:{ 
        willTransitionFrom: function(transition, component){ 
            if(Object.keys(component.state.errors).length === 0){ 
                return
            }
            if(component.state.dirty && !confirm('Leave without saving?')){ 
                transition.abort();
            }
        }
    },

    getInitialState: function(){ 
        return{
            author: { id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        }
    },

    componentWillMount: function(){ 
        var authorId = this.props.params.id;
        if (authorId){ 
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
    },

    setAuthorState: function(event){ 
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author})
    },

    authorFormIsValid: function(){ 
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 3){ 
            this.state.errors.firstName = 'Firstname is too short';
            formIsValid = false;
        }

        if(this.state.author.lastName.length < 3    ){ 
            this.state.errors.lastName = 'Lastname is too short'
            formIsValid = false;            
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function(event){ 
        event.preventDefault();

        if(!this.authorFormIsValid()){ 
            return;
        }
        this.setState({dirty: false});
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author has been saved');
        this.transitionTo('authors');
    },

    render: function() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm 
                    author= {this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = ManageAuthor;