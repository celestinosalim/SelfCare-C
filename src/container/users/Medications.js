import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Medications extends Component {

  render(){
    const emptyMessage = (
      <tr>
        <td colSpan="7">You have no medications listed</td>
      </tr>
    )

    const medicationList = this.props.medications.map(medication =>
      <tr className='AttrInfo' key={medication.id}>
        <td>{medication.name}</td>
        <td>{medication.dose}</td>
        <td>{medication.first_dose}</td>
        <td>{medication.prescribed}</td>
        <td>{medication.notes}</td>
        <td><Button bsStyle="link" onClick={() => this.props.editMed(medication)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => {this.props.deleteMed(medication.id)}}>Delete</Button></td>
      </tr>
    )

    return (
      <tbody>
        {medicationList.length === 0 ? emptyMessage : medicationList}
      </tbody>
    )
  }
}

export default Medications;
