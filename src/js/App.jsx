/** @jsx React.DOM */
var React = require('react');
var Survey = require('./Survey.jsx');

React.renderComponent(
  <div>
    <h1>VI-SPDAT</h1>
    <Survey/>
  </div>,
  document.body);
