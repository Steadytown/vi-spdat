/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <label for="firstname" class="test">First Name</label>
        <input type="text" id="firstname" />
        <br/>
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" />
        <br/>
        <label for="nickname">Nick Name</label>
        <input type="text" id="nickname" />
        <br/>
        <label for="ssn">Social Security Number</label>
        <input type="text" id="ssn" />
        <br/>
        <label for="age">How old are you?</label>
        <input type="number" id="age" />
        <br/>
        <label for="birthdate">What's your date of birth?</label>
        <input type="date" id="birthdate" />
        <br/>
      </div>
    )
  }
});
