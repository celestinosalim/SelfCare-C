import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../components/common/formFields';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { addMedications } from '../actions/medicationActions'
import initialState from '../reducers/initialState';

class MedicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: [],
    }
  }

  handleChange(e) {
    this.setState( {e.target.name: e.target.value} )
  }

  handleSubmit(e) {
    e.preventDefault()
    //call action.addMedications to tell reducer to add the new medication
  }

  render() {
    return (
      <div className="formContainer">
        <h3>Add a New Medication</h3>
        <Form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            label="Name:"
            id="formControlsName"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Dose:"
            id="formControlsDose"
            type="text"
            name="dose"
            placeholder="Dose"
            value={this.state.dose}
            onChange={this.handleChange}
           />
          <TextFieldGroup
            label="Prescriber:"
            id="formControlsPrescriber"
            type="text"
            name="prescriber"
            placeholder="prescriber"
            value={this.state.prescribed}
            onChange={this.handleChange}
           />
           <TextFieldGroup
             label="Notes:"
             id="formControlsNotes"
             type="text"
             name="notes"
             placeholder="notes"
             value={this.state.notes}
             onChange={this.handleChange}
            />
         <div className="submissionFields">
           <Button type="submit" value="Add Medication">Add Medication</Button>
         </div>
        </Form>
      </div>
    )
  }
}

// function mapStatesToProps(state) {
//   return {
//     medications: state.api.medications
//   }
// }

// export default connect(mapStatesToProps)(MedicationForm);

export default MedicationForm
