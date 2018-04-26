import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateLikes } from '../../actions/medicationActions'

class MedicationListItem extends Component {

  handleLikeChange = (medication) => {
    const likedMedication = Object.assign({}, medication, {like: medication.like+1})
    this.props.updateLikes(likedMedication)
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
        <td><Button bsStyle="link" onClick={() => this.props.deleteMed(medication.id)}>Delete</Button></td>
        <td><Button bsStyle="success" onClick={() => this.handleLikeChange(medication)}>Like {medication.like}</Button></td>
      </tr>
    )
  }
}

export default connect(null, {
  updateLikes
})(MedicationListItem);
