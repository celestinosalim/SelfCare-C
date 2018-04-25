import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MedicationListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
  }

  toggleLikeMeds = () => {
    this.setState({
      counter: this.state.counter +=1
    })
  }

  render(){
    const {medication} = this.props
    return (
      <tr className='AttrInfo' key={medication.id}>
        <td>{medication.name}</td>
        <td>{medication.dose}</td>
        <td>{medication.first_dose}</td>
        <td>{medication.prescribed}</td>
        <td>{medication.notes}</td>
        <td><Button bsStyle="link" onClick={() => this.props.editMed(medication)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => {this.props.deleteMed(medication.id)}}>Delete</Button></td>
        <td><Button bsStyle="success" onClick={() => {this.toggleLikeMeds()}}>Like {this.state.counter}</Button></td>
      </tr>
    )
  }
}

export default MedicationListItem;
