import React, { Component } from 'react';
import MedicationListItem from './MedicationListItem'

class Medications extends Component {

  render(){
    const emptyMessage = (
      <tr>
        <td colSpan="7">You have no medications listed</td>
      </tr>
    )

    const medicationList = this.props.medications.map(medication =>
      <MedicationListItem key={medication.id} medication={medication} likeMed={this.props.likeMed}/>
    )

    return (
      <tbody>
        {medicationList.length === 0 ? emptyMessage : medicationList}
      </tbody>
    )
  }
}

export default Medications;
