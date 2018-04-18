import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { createMedication, updateMedication } from '../../actions/medicationActions'

class MedicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      dose: "",
      first_dose: "",
      prescribed: "",
      notes: ""
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.medication
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.id === "") {
      this.props.createMedication(this.state)
    } else {
      this.props.updateMedication(this.state.id, this.state)
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} data-id={this.state.id}>
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
          type="number"
          name="dose"
          placeholder="Dose"
          value={this.state.dose}
          onChange={this.handleChange}
         />
        <TextFieldGroup
          label="Date of First Dose:"
          id="formControlsFirstDose"
          type="text"
          name="first_dose"
          placeholder="First Dose"
          value={this.state.first_dose}
          onChange={this.handleChange}
         />
        <TextFieldGroup
          label="Prescriber:"
          id="formControlsPrescriber"
          type="text"
          name="prescribed"
          placeholder="prescriber"
          value={this.state.prescribed}
          onChange={this.handleChange}
         />
         <TextFieldGroup
           label="Notes:"
           id="formControlsNotes"
           type="textarea"
           name="notes"
           placeholder="notes"
           value={this.state.notes}
           onChange={this.handleChange}
          />
       <br />
         <Button bsStyle="success" type="submit" value="Add Medication">Add Medication</Button>
      </Form>
    )
  }
}

export default connect(null, {
  createMedication,
  updateMedication
})(MedicationForm);
