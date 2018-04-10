import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../components/common/formFields';
import { connect } from 'react-redux';
import { updateMedicationFormData, createMedication } from '../actions/medicationActions'

class MedicationForm extends Component {

  handleChange(e) {
    const { name, value } = e.target
    const currentMedicationFormData = Object.assign({}, this.props.medicationFormData, {
      [name]: value
    })
    this.props.updateMedicationFormData(currentMedicationFormData)
  }

  handleSubmit(e) {
    //call action.addMedications to tell reducer to add the new medication
    e.preventDefault()
    this.props.store.createMedication(this.props.medicationFormData)
  }

  render() {

    const { name, dose, prescribed, notes } = this.props.medicationFormData;

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
            value={name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Dose:"
            id="formControlsDose"
            type="text"
            name="dose"
            placeholder="Dose"
            value={dose}
            onChange={this.handleChange}
           />
          <TextFieldGroup
            label="Prescriber:"
            id="formControlsPrescriber"
            type="text"
            name="prescriber"
            placeholder="prescriber"
            value={prescribed}
            onChange={this.handleChange}
           />
           <TextFieldGroup
             label="Notes:"
             id="formControlsNotes"
             type="text"
             name="notes"
             placeholder="notes"
             value={notes}
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

const mapStateToProps = (state) => {
  return {
    medicationFormData: state.medicationFormData
  }
}

export default connect(mapStateToProps, {
  updateMedicationFormData,
  createMedication
})(MedicationForm);
