/** @jsx React.DOM */
var React = require('react');
var ReactForms = require('react-forms');
var Question = require('./Question.jsx');
var Form = ReactForms.Form;
var Mapping = ReactForms.schema.Mapping;

var Survey = Mapping({ label: 'General Information/Consent' }, {
  hoh: require('./HoH.jsx'),
  history: Mapping({ label: 'A. History of Housing & Homelessness' }, {
    length: Question({
      label: 'What is the total length of time you have lived on the streets or in shelters?',
      type: 'time'
    }),
    times: Question({
      label: 'In the past three years, how many times have you been housed and then homeless again?',
      type: 'number'
    })
  }),
  risks: Mapping({ label: 'B. Risks' }, {
    emergencyRoom: Question({
      label: 'In the past six months, how many times have you been to the emergency room?',
      type: 'number'
    }),
    police: Question({
      label: 'In the past six months, how many times have you had interaction with the police?',
      type: 'number'
    }),
    ambulance: Question({
      label: 'In the past six months, how many times have been taken to the hospital or in an ambulance?',
      type: 'number'
    }),
    crisisService: Question({
      label: 'In the past six months, how many times have you used a crisis service, including distress centers or suicide prevention hotlines?',
      type: 'number'
    }),
    hospitalized: Question({
      label: 'In the past six months, how many times have you been hospitalized as an in-patient, including hospitalizations in a mental health hospital?',
      type: 'number'
    }),
    attacked: Question({
      label: 'Have you been attacked or beaten up since becoming homeless?',
      type: 'bool'
    }),
    harmAttempt: Question({
      label: 'Threatened to or tried to harm yourself or anyone else in the last year?',
      type: 'bool'
    }),
    legalIssue: Question({
      label: 'Do you have any legal stuff going on right now that may result in you being locked up or having to pay fines?',
      type: 'bool'
    }),
    tricked: Question({
      label: 'Does anybody force or trick you to do things that you do not want to do?',
      type: 'bool'
    }),
    riskyActivities: Question({
      label: 'Ever do things that may be considered to be risky like exchange sex for money, run drugs for someone, have unprotected sex with someone you don\'t really know, share a needle, or anything like that?',
      type: 'bool'
    }),
    sleepingPlace: Question({
      label: 'I am going to read types of places people sleep. Please tell me which one that you sleep most often.',
      type: 'option',
      options: [
        "Shelter", "Street, Sidewalk or Doorway", "Car, Van, or RV",
        "Bus or Subway", "Beach, Riverbed, or Park", "Other (Specify)"
      ]
    })
  }),
  socialization: Mapping({ label: 'C. Socialization and Daily Functions' }, {
    streetDebt: Question({
      label: 'Is there anybody that thinks you owe them money?',
      type: 'bool'
    }),
    steadyIncome: Question({
      label: 'Do you have any money coming in on a regular basis, like a job or a government benefit or even working under the table, binning or bottle collecting, sex work, odd jobs, day labor, or anything like that?',
      type: 'bool'
    }),
    enoughIncome: Question({
      label: 'Do you have enough money to meet all your expenses on a monthly basis?',
      type: 'bool'
    }),
    meaningfulActivities: Question({
      label: 'Do you have planned activities each day other than just surviving that bring you happiness and fulfillment?',
      type: 'bool'
    }),
    convenienceOnlyRelationships: Question({
      label: 'Do you have any friends, family or other people in your life out of convenience or necessity, but you do not like their company?',
      type: 'bool'
    }),
    badInfluences: Question({
      label: 'Do any friends, family or other people in your life ever take your money, borrow cigarettes, use your drugs, drink your alcohol, or get you to do things you really don\'t want to do?',
      type: 'bool'
    }),
    poorHygiene: Question({
      label: 'Surveyor, do you detect signs of poor hygiene or daily living skills?',
      type: 'bool',
      observationOnly: true
    })
  }),
  wellness: Mapping({ label: 'D. Wellness' }, {
    healthcareProvider: Question({
      label: 'Where do you usually go for healthcare or when you\'re not feeling well?',
      type: 'option',
      options: [
        'Hospital',
        'Clinic',
        'VA',
        'Other (Specify)',
        'Does not go for care'
      ]
    }),
    kidneyDisease: Question({
      label: 'Kidney disease/End Stage Renal Disease or Dialysis',
      type: 'bool'
    }),
    frostBite: Question({
      label: 'History of Frostbite, Hypothermia, or Immersion Foot',
      type: 'bool'
    }),
    liverDisease: Question({
      label: 'Liver Disease, Cirrhosis, or End-State Liver Disease',
      type: 'bool'
    }),
    hiv: Question({
      label: 'HIV+/AIDS',
      type: 'bool'
    }),
    heatStroke: Question({
      label: 'History of Heat Stroke/Heat Exhaustion',
      type: 'bool'
    }),
    heartDisease: Question({
      label: 'Heart Disease, Arrhythmia, or Irregular Heartbeat',
      type: 'bool'
    }),
    lungDisease: Question({
      label: 'Emphysema',
      type: 'bool'
    }),
    diabetes: Question({
      label: 'Diabetes',
      type: 'bool'
    }),
    asthma: Question({
      label: 'Asthma',
      type: 'bool'
    }),
    cancer: Question({
      label: 'Cancer',
      type: 'bool'
    }),
    hepatitis: Question({
      label: 'Hepatitis C',
      type: 'bool'
    }),
    tuberculosis: Question({
      label: 'Tuberculosis',
      type: 'bool'
    }),
    seriousHealthConditionObserved: Question({
      label: 'Surveyor, do you observe signs or symptoms of a serious health condition?',
      type: 'bool',
      observationOnly: true
    }),
    substanceAbuse: Question({
      label: 'Have you ever had problematic drug or alcohol use, abused drugs or alcohol, or told you do?',
      type: 'bool'
    }),
    highConsumption: Question({
      label: 'Have you consumed alcohol and/or drugs almost every day or every day for the past month?',
      type: 'bool'
    }),
    injectionDrugUse: Question({
      label: 'Have you ever used injection drugs or shots in the last six months?',
      type: 'bool'
    }),
    relapse: Question({
      label: 'Have you ever been treated for drug or alcohol problems and returned to drinking or using drugs?',
      type: 'bool'
    }),
    nonBeverageAlcohol: Question({
      label: 'Have you ever used non-beverage alcohol like cough syrup, mouthwash, rubbing alcohol, cooking wine, or anything like that in the past six months?',
      type: 'bool'
    }),
    passedOut: Question({
      label: 'Have you ever blacked out because of your alcohol or drug use in the past month?',
      type: 'bool'
    }),
    substanceAbuseObserved: Question({
      label: 'Surveyor, do you observe signs or symptoms of problematic alcohol or drug abuse?',
      type: 'bool',
      observationOnly: true
    }),
    involuntaryCommittment: Question({
      label: 'Ever been taken to a hospital against your will for a mental health reason?',
      type: 'bool'
    }),
    mentalEmergency: Question({
      label: 'Gone to the emergency room because you weren\'t feeling 100% well emotionally or because of your nerves?',
      type: 'bool'
    }),
    psychiatrist: Question({
      label: 'Spoken with a psychiatrist, psychologist, or other mental health professional in the last six months because of your mental health -- whether that was voluntary or because someone insisted that you do?',
      type: 'bool'
    }),
    headTrauma: Question({
      label: 'Had a serious brain injury or head trauma?',
      type: 'bool'
    }),
    learningDisability: Question({
      label: 'Ever been told you have a learning disability or developmental disability?',
      type: 'bool'
    }),
    memoryProblems: Question({
      label: 'Do you have any problems concentrating and/or remembering things?',
      type: 'bool'
    }),
    seriousMentalIllnessObserved: Question({
      label: 'Surveyor, do you detect signs or symptoms of severe, persistent mental illness or severely compromised cognitive functioning?',
      type: 'bool',
      observationOnly: true
    }),
    medicationMisuse: Question({
      label: 'Have you had any medicines prescribed to you by a doctor that you do not take, sell, had stolen, misplaced, or where the prescriptions were never filled?',
      type: 'bool'
    }),
    abuseOrTrauma: Question({
      label: 'Yes or No -- Have you ever experienced any emotional, physical, psychological, sexual, or other type of abuse or trauma in your life which you have not sought help for, and/or which has caused your homelessness?',
      type: 'bool'
    })
  })
});

module.exports = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.onSubmit} className="Survey">
        <Form ref="form" schema={Survey} component={React.DOM.div} />
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
