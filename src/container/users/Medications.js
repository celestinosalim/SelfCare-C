import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import MedicationListItem from './MedicationListItem'

class Medications extends Component {
  constructor(props){
    super(props);
  }

  toggleLikeMeds = () => {
    this.setState({
      counter: this.state.counter +=1
    })
    console.log("test", this.state.counter)
  }

  render(){
    const emptyMessage = (
      <tr>
        <td colSpan="7">You have no medications listed</td>
      </tr>
    )

    const medicationList = this.props.medications.map(medication =>
      <MedicationListItem medication={medication} />
    )

    return (
      <tbody>
        {medicationList.length === 0 ? emptyMessage : medicationList}
      </tbody>
    )
  }
}

export default Medications;
