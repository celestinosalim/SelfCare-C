import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MedicationListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      prevLike: this.props.medication.like,
      updatedLike: "",
    }
  }

  handleLikeChange = () => {
    this.setState({
      updatedLike: this.state.prevLike++
    })
  }

  render(){
    const {medication} = this.props
    return (
      <tr className='AttrInfo'>
        <td>{medication.name}</td>
        <td>{medication.dose}</td>
        <td>{medication.first_dose}</td>
        <td>{medication.prescribed}</td>
        <td>{medication.notes}</td>
        <td><Button bsStyle="link" onClick={() => this.props.editMed(medication)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => {this.props.deleteMed(medication.id)}}>Delete</Button></td>
        <td><Button bsStyle="success" onClick={() => {this.handleLikeChange()}}>Like {this.state.updatedLike}</Button></td>
      </tr>
    )
  }
}

export default MedicationListItem;
