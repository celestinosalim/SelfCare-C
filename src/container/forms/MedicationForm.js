import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { enterMedicationFormData, createMedication } from '../../actions/medicationActions'
// , updateMedication
class MedicationForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    debugger;
    const { id, name, dose, first_dose, prescribed, notes } = nextProps.medication;
    if (this.props.id !== nextProps.id) {
      this.setState({
        medication: nextProps.medication
      })
    }
  }


  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // }

  handleChange = (e) => {
    const { name, value } = e.target
    const currentMedicationFormData = Object.assign({}, this.props.medicationFormData, {
      [name]: value
    })
    this.props.enterMedicationFormData(currentMedicationFormData)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.createMedication(this.props.medicationFormData)
    // if (this.props.medication.id === "") {
    //   this.props.createMedication(this.props.medicationFormData)
    // } else {
    //   console.log(this.props.medication)
    //   this.props.updateMedication(this.state)
    // }
  }

  render() {
    const { id, name, dose, first_dose, prescribed, notes } = this.props.medicationFormData;

    return (
        <Form onSubmit={this.handleSubmit} data-id={id}>
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
    medication: state.medication,
    medicationFormData: state.medicationFormData
  }
}

export default connect(mapStateToProps, {
  enterMedicationFormData,
  createMedication,
  // updateMedication
})(MedicationForm);
