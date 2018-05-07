var Backbone = require("backbone")
var _ = require("underscore")
var GeneralizeModel = Backbone.Model.extend({
  initialize: function( attributes, options){
    if(!_.isEmpty(options.metadata)){
      this.metadata = options.metadata;
    }else{
      this.metadata = this.collection.metadata;
    }
    this.url = this.metadata.url;
  }
});
module.exports = GeneralizeModel
