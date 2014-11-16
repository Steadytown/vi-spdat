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

var HoH = Mapping({
  language: Scalar({
    label: 'In what language do you feel best able to express yourself?',
    input:
      <select>
        <option value="0">English</option>
        <option value="1">Spanish</option>
      </select>
  }),
  firstname: Scalar({
    required: true,
    label: 'First Name',
  }),
  lastname: Scalar({
    label: 'Last Name'
  }),
  nickname: Scalar({
    label: 'Nick Name'
  }),
  ssn: Scalar({
    label: 'Social Security Number'
  }),
  age: Scalar({
    type: 'number',
    label: 'How old are you?'
  }),
  birthdate: Scalar({
    type: 'date',
    label: 'What\'s is your date of birth?'
  }),
  consented: Scalar({
    type: 'bool',
    label: 'Has Consented to Participate',
    input: <RadioButtonGroup options={options} />
  }),
});

module.exports = HoH;
