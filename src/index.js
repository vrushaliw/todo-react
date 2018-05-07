import './index.css';
import registerServiceWorker from './registerServiceWorker';
import DefaultRouter from './routers/default_router'
var Backbone = require("backbone")


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


new DefaultRouter()

Backbone.history.start({pushState: true})
