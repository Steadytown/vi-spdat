/** @jsx React.DOM */
var React = require('react');
var SignaturePad = require('signature_pad');

module.exports = React.createClass({
  componentDidMount: function() {
    var canvas = this.getDOMNode().querySelector("canvas");
    var signature = new SignaturePad(canvas);
  },
  render: function() {
    return (
      <div>
        <label htmlFor="consent">
          I consent to participate in this survey to help guide me to the
          services that can help me best.
        </label>
        <input type="checkbox" id="consent" />
        <br/>
        <canvas id="signature-pad"></canvas>
      </div>
    )
  }
});
