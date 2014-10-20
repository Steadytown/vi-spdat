/** @jsx React.DOM */
var React = require('react');
var Consent = require('./consent.jsx');

React.renderComponent(
  <div>
    <h1>Hello World</h1>
    <Consent/>
  </div>,
  document.body);
