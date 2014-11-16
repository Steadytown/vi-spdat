/** @jsx React.DOM */
var React = require('react');
var ReactForms = require('react-forms');
var RadioButtonGroup = require('react-forms/lib/RadioButtonGroup')
var Mapping = ReactForms.schema.Mapping;
var Scalar = ReactForms.schema.Scalar;

var options = [
  { value: 'y', name: 'Yes' },
  { value: 'n', name: 'No' }
]

var Refused = React.createClass({
  render: function() {
    var refusedId = this._rootNodeID + '.refused';
    return (
      <span>
        <label htmlFor={refusedId}>Refused</label>
        <input id={refusedId} type="checkbox" checked={this.props.checked}
          onChange={this.props.onChange} />
      </span>
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

  handleRefused: function(e) {
    var refused = e.target.checked ? 'refused' : ''
    this.setState({ value: refused } );
    this.props.onChange(refused);
  },

  input: function() {
    if (this.props.type === 'bool') {
      return (
        <RadioButtonGroup value={this.state.value} options={options} onChange={this.handleAnswer} />
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
    var input = this.input();
    if (this.state.value === 'refused') {
      return (
        <Refused checked={true} onChange={this.handleRefused} />
      )
    } else {
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
            <Refused checked={false} onChange={this.handleRefused} />
          </div>
        )
      }
    }
  }
})

module.exports = function(args) {
  return Scalar({
    label: args.label,
    input: <QuestionInput type={args.type} observationOnly={args.observationOnly} />
  })
};
