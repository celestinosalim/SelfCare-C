import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { createMedication, updateMedication } from '../../actions/medicationActions'

class MedicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMedication: this.props.medication || {
        id: "",
        name: "",
        dose: "",
        first_dose: "",
        prescribed: "",
        notes: ""
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.selectedMedication.id === "") {
      this.props.createMedication(this.state)
    } else {
      this.props.updateMedication(this.state.selectedMedication.id, this.state)
    }
  }

  render() {

    return (
        <Form onSubmit={this.handleSubmit} data-id={this.state.selectedMedication.id}>
          <TextFieldGroup
            label="Name:"
            id="formControlsName"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.selectedMedication.name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Dose:"
            id="formControlsDose"
            type="text"
            name="dose"
            placeholder="Dose"
            value={this.state.selectedMedication.dose}
            onChange={this.handleChange}
           />
          <TextFieldGroup
            label="Date of First Dose:"
            id="formControlsFirstDose"
            type="text"
            name="first_dose"
            placeholder="First Dose"
            value={this.state.selectedMedication.first_dose}
            onChange={this.handleChange}
           />
          <TextFieldGroup
            label="Prescriber:"
            id="formControlsPrescriber"
            type="text"
            name="prescribed"
            placeholder="prescriber"
            value={this.state.selectedMedication.prescribed}
            onChange={this.handleChange}
           />
           <TextFieldGroup
             label="Notes:"
             id="formControlsNotes"
             type="text"
             name="notes"
             placeholder="notes"
             value={this.state.selectedMedication.notes}
             onChange={this.handleChange}
            />
         <br />
           <Button bsStyle="success" type="submit" value="Add Medication">Add Medication</Button>
        </Form>
    )
  }
}

const mapStateToProps = (state) => {
  // return {
  //   medicationFormData: state.medicationFormData
  // }
}

export default connect(mapStateToProps, {
  createMedication,
  updateMedication
})(MedicationForm);
