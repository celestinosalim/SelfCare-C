import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import AddNewObjBtn from '../components/common/addNewObjBtn'

import MedicationForm from './forms/MedicationForm';

class AddMedication extends Component {
  constructor(){
    super();
    this.state = {
      isHidden: true
    }
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="AttrNew">
        <Button onClick={this.toggleHidden.bind(this)}>Add New Medication</Button>
        {!this.state.isHidden && <MedicationForm />}
      </div>
    )
  }
}

export default AddMedication
