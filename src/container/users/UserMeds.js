import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import Medications from './Medications';
import MedicationForm from '../../container/forms/MedicationForm'

class UserMeds extends Component {

  render(){
    return (
      <div className="UserMedications">
        <div className="AttrTitle">
          <h3>Medication</h3>
        </div>
        <div className="AttrIndex">
          <div className="AttrTable">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Medication Name</th>
                  <th>Dose</th>
                  <th>Date of First Dose</th>
                  <th>Prescribed By</th>
                  <th>Notes</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <Medications
                medications={this.props.medications}
                editMed={this.props.editMed} deleteMed={this.props.deleteMed}/>
            </Table>
          </div>

          {this.props.isEditMed && !this.props.isEditIns && !this.props.isEditProv ?
            <div className="AttrForm">
              <h3>Edit {this.props.selectedMed.name}</h3>
              <MedicationForm medication={this.props.selectedMed}/>
              <Button bsStyle="link" onClick={this.props.editMed}>Cancel</Button>
            </div>
            :
            <div className="AttrNew">
              <Button bsStyle="primary" onClick={this.props.addMed}>Add New Medication</Button>
            </div>
          }

          {this.props.toCreate ?
            <div className="AttrForm">
              <h3>Add New Medication</h3>
              <MedicationForm />
              <Button bsStyle="link" onClick={this.props.addMed}>Cancel</Button>
            </div>
            :
            null
          }

          <br />
        </div>
      </div>
    )
  }
};

export default UserMeds;
