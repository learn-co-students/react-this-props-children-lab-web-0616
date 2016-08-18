const React = require('react');
const ReactDOM = require('react-dom');

const Invitation = require('./components/Invitation');
const ThemedParty = require('./components/ThemedParty');

ReactDOM.render(
  <Invitation/>,
  document.getElementById('main')
);
