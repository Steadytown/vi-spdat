/** @jsx React.DOM */
var React = require('react');
var ReactForms = require('react-forms');
var RadioButtonGroup = require('react-forms/lib/RadioButtonGroup')
var CheckBoxGroup = require('react-forms/lib/CheckBoxGroup')
var Mapping = ReactForms.schema.Mapping;
var Scalar = ReactForms.schema.Scalar;
var Immutable = require('immutable');

var yesNoOptions = [
  { value: 'y', name: 'Yes' },
  { value: 'n', name: 'No' }
]

var refusedOptions = [ { value: 'refused', name: 'Refused' } ];

var Refused = React.createClass({
  render: function() {
    var value = undefined;
    if (this.props.checked) {
      var value = Immutable.List.of('refused');
    }
    return (
      <CheckBoxGroup value={value}
        options={refusedOptions}
        onChange={this.props.onChange} />
    )
  }
});

var QuestionInput = React.createClass({

  getInitialState: function() {
    return { value: this.props.value };
  },

  handleAnswer: function(e) {
    var answer = e;
    if (answer.target) {
      answer = answer.target.value;
    }
    this.setState({ value: answer } );
    this.props.onChange(answer);
  },

  handleRefused: function(value) {
    this.setState({ value: value.get(0) } );
    this.props.onChange(value);
  },

  input: function() {
    if (this.props.type === 'bool') {
      return (
        <RadioButtonGroup value={this.state.value}
          options={yesNoOptions}
          onChange={this.handleAnswer} />
      )
    } else {
      var type = this.props.type;
      if (!type) {
        type = 'text';
      }
      return (
        <input type={type} onChange={this.handleAnswer} />
      )
    }
  },

  render: function() {
    var refusedChecked = this.state.value === 'refused';
    var input = refusedChecked ? undefined : this.input();
    if (this.props.observationOnly) {
      return (
        <div>
          {input}
        </div>
      )
    } else {
      return (
        <div>
          {input}
          <Refused onChange={this.handleRefused} checked={refusedChecked} />
        </div>
      )
    }
  }
})

module.exports = function(args) {
  return Scalar({
    label: args.label,
    input: <QuestionInput type={args.type} observationOnly={args.observationOnly} />
  })
};
