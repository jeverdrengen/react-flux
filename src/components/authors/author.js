"use strict";

var React = require('react');
var authorAPI = require('../../api/authorApi');
var Router = require('react-router');
var Link = Router.Link;
//var authorList = require('./author-list');

var Authors = React.createClass({
    

    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentWillMount: function () {
        //if(this.isMounted()){
            this.setState({ authors: authorAPI.getAllAuthors() });
        //}
    },

    render: function() {
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
                        <th>ID</th>
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