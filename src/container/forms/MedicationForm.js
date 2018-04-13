import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { enterMedicationFormData, createMedication } from '../../actions/medicationActions'
// , updateMedication
class MedicationForm extends Component {

  handleChange = (e) => {
    const { name, value } = e.target
    const currentMedicationFormData = Object.assign({}, this.props.medicationFormData, {
      [name]: value
    })
    this.props.enterMedicationFormData(currentMedicationFormData)
  }

  // handleEditUpdate = (e) => {
  //   const { name, value } = e.target
  //   const selectedMedsFormData = (this.props.medicationFormData, {
  //     [name]: value
  //   })
  //   // this.props.actions.updateMedication(this.state.medication);
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createMedication(this.props.medicationFormData)
  }

  render() {
    const { name, dose, first_dose, prescribed, notes } = this.props.medicationFormData;

    return (
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
            label="Date of First Dose:"
            id="formControlsFirstDose"
            type="text"
            name="first_dose"
            placeholder="First Dose"
            value={first_dose}
            onChange={this.handleChange}
           />
          <TextFieldGroup
            label="Prescriber:"
            id="formControlsPrescriber"
            type="text"
            name="prescribed"
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
         <br />
           <Button bsStyle="success" type="submit" value="Add Medication">Add Medication</Button>

        </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    medicationFormData: state.medicationFormData
  }
}

export default connect(mapStateToProps, {
  enterMedicationFormData,
  createMedication,
  // updateMedication
})(MedicationForm);
