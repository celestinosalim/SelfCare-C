import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import MedicationForm from './MedicationForm'

class AddMedication extends Component {

  handleClick(e) {
    return console.log("hi")
  }

  render() {
    return (
      <div className="AttrNew">
        <Button onClick={this.handleClick}>Add New Medication</Button>
        <MedicationForm />
      </div>
    )
  }
}

export default AddMedication
