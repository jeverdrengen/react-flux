"use strict";

var React = require('react');
var authorAPI = require('../../api/authorApi');
var authorStore = require('../../stores/author-store');
var authorActions = require('../../actions/author-actions');
var Router = require('react-router');
var Link = Router.Link;
//var authorList = require('./author-list');

var Authors = React.createClass({
    

    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentDidMount: function () {
        //if(this.isMounted()){
            this.setState({ authors: authorAPI.getAllAuthors()});
        //}
    },

    componentWillMount: function () {
        authorStore.addChangeListener(this._onChange);
    },

    componentWillUnMount: function () {
        authorStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){ 
        this.setState({authors: authorStore.getAllAuthors()})
    },

    render: function() {
        //console.log(this.state.authors)
        var createAuthorRow = function (author) {
            
            return (
                <tr key={author.id}>
                    <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            )
        };

        return (
            
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add</Link>
                <table className="table">
                    <thead>
                        <th>IDs</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors; 