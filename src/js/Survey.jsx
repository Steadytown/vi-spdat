/** @jsx React.DOM */
var React = require('react');
var ReactForms = require('react-forms');
var Form = ReactForms.Form;

var HoH = require('./HoH.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.onSubmit} className="Survey">
        <Form ref="form" schema={HoH} component={React.DOM.div} />
        <button type="submit">Submit</button>
      </form>
    )
  },

  onSubmit: function(e) {
    e.preventDefault();
    var form = this.refs.form;
    if (form.getValidation().isFailure)  {
      form.markDirty();
    }
    console.log(form.getValue());
  }
})
