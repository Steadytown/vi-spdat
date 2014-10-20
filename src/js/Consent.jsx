/** @jsx React.DOM */
var React = require('react');
var Signature = require('signature_pad');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="consent">
        <form>
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" />

          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" />
          </form>
        <div id="signature-pad" class="m-signature-pad">
          <div class="m-signature-pad--body">
            <canvas></canvas>
          </div>
          <div class="m-signature-pad--footer">
            <div class="description">Sign above</div>
            <button class="button clear" data-action="clear">Clear</button>
            <button class="button save" data-action="save">Save</button>
          </div>
        </div>
      </div>
    )
  }
});
