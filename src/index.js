import './index.css';
import registerServiceWorker from './registerServiceWorker';
import DefaultRouter from './routers/default_router'
import $ from 'jquery'
var Backbone = require("backbone")

registerServiceWorker();

$(document).ready(function(){

  new DefaultRouter()

  Backbone.history.start({pushState: true})
})
