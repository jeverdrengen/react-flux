"use strict";

var Dispatcher = require('../dispatcher/app-dispatcher');
var ActionTypes = require('../constants/action-types');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var assign = require('object-assign');

var _authors = [];

var AuthorStore = assign( {}, EventEmitter.prototype, { 
    addChangeListener: function(callback){ 
        this.on('change', callback);
    },

    removeChangeListener: function(callback){ 
        this.removeChangeListener('change', callback);
    },

    emitChange: function(){ 
        this.emit('change');
    },

    getAllAuthors: function(){ 
        return _authors;
    },
    getAuthorByID: function(id){ 
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(function(action){

    switch(action.actiontype){ 

        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
             _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var exixtingAuthor = _.find(_authors, {id: action.author.id});
            var exixtingAuthorIndex = _.indexOf(_authors, exixtingAuthor);
            _authors.splice(exixtingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
    }
});

module.exports = AuthorStore;