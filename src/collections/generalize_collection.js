var Backbone = require("backbone")
var GeneralizeModel = require('../models/generalize_model');
var GeneralizeCollection = Backbone.Collection.extend({
  model: GeneralizeModel,
  initialize: function( models, options){
    this.metadata = options.metadata;
    this.url = this.metadata.url;
  }
});

module.exports = GeneralizeCollection
