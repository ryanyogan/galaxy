var ShouterForm = require('./shouterForm');
var React       = require('react');

var injectTapEventPlugin = require('react-tap-event-plugin');

window.React = React;

injectTapEventPlugin();

React.render(<ShouterForm />, document.getElementById('application'));
