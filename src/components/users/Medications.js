import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMedication } from '../../actions/medicationActions';

import MedicationForm from '../../container/forms/MedicationForm'

class Medications extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  toggleEdit(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleDelete(){
    this.props.deleteMedication(this.props.id);
  }

  render(){
    const emptyMessage = (
      <tr>
        <td colSpan="6">There are no medications in your list</td>
      </tr>
    )

    const renderMeds = this.props.medications.map(medication =>
      <tr className='AttrInfo' key={medication.id}>
        <td>{medication.name}</td>
        <td>{medication.dose}</td>
        <td>{medication.first_dose}</td>
        <td>{medication.prescribed}</td>
        <td>{medication.notes}</td>
        <td><Button bsStyle="link" onClick={this.toggleEdit}>Edit</Button> | <Button bsStyle="link" onClick={this.handleDelete}>Delete</Button></td>
      </tr>
    )

    return (
      <div className="AttrList">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Medication Name</th>
              <th>Dose</th>
              <th>Date of First Dose</th>
              <th>Prescribed By</th>
              <th>Notes</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {renderMeds.length === 0 ? emptyMessage : renderMeds}
          </tbody>
        </Table>
          {!this.state.isHidden && <MedicationForm />}
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    medication: state.medication
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteMedication: deleteMedication
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Medications);
