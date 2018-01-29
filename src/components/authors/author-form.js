"use strict";

var React = require('react');
var TextInput = require('../common/text-input');

var AuthorForm = React.createClass({
    propTypes: { 
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <form>
                
                <TextInput 
                    name='firstName'
                    label='First Name'
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    placeholder='write your first name'
                    error={this.props.errors.firstName} />
                
                <TextInput 
                    name='lastName'
                    label='Last Name'
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    placeholder='write your last name'
                    error={this.props.errors.lastName} />
                <br />
                <input onClick={this.props.onSave} type="submit" value="save" className="btn btn-default" />
            </form>
        );
    }
});

module.exports = AuthorForm;