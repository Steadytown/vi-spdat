/** @jsx React.DOM */
var React = require('react');
var Consent = require('./Consent.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <form>
        <Consent/>
        <input type="button" value="Previous" />
        <input type="submit" value="Next" />
      </form>
    )
  }
});
