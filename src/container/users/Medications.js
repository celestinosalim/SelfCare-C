import React, { Component } from 'react';
import MedicationListItem from './MedicationListItem'

class Medications extends Component {

  render(){
    const emptyMessage = (
      <tr>
        <td colSpan="7">You have no medications listed</td>
      </tr>
    )
    
    const sorted = this.props.medications.sort(function(a, b){
      return b.like - a.like;
    })

    // const sorted = this.props.medications.filter(medication => medication.like > 15)

    const medicationList = sorted.map(medication =>
      <MedicationListItem
      key={medication.id}
      editMed={this.props.editMed}
      deleteMed={this.props.deleteMed}
      medication={medication}/>
    )

    return (
      <tbody>
        {medicationList.length === 0 ? emptyMessage : medicationList}
      </tbody>
    )
  }
}

export default Medications;
