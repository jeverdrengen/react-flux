"use strict";

var Dispatcher = require('../dispatcher/app-dispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/action-types');


var InitalizeActions = { 
    initApp: function(){ 
        Dispatcher.dispatch({ 
            actionType:ActionTypes.INITIALIZE,
            initialData: { 
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitalizeActions;