import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/Index';
import global_metadata from '../global_metadata'
import GeneralizeCollection from '../collections/generalize_collection';

var Backbone = require("backbone")
var DefaultRouter = Backbone.Router.extend({

  routes: {
    ":collection_name/:id/edit": "edit",
    ":collection_name/:id": "show",
    ":collection_name": "index",
  },
  index: function(collection_name){
    ReactDOM.render(<List metadata={global_metadata.todo_list} collection={new GeneralizeCollection([], {metadata: global_metadata.todo_list})} />, document.getElementById('root'));
  },
  show: function(collection_name, id){

  },
  edit: function(collection_name, id){

  }
});

export default DefaultRouter
