var Galaxy = require('./components/galaxy');
var React  = require('react');

var injectTapEventPlugin = require('react-tap-event-plugin');

window.React = React;

injectTapEventPlugin();

React.render(<Galaxy />, document.getElementById('application'));
