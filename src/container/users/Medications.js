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
      toCreate: false,
      isEditing: false,
    }
    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  toggleCreate(){
    this.setState({
      toCreate: !this.state.toCreate
    })
  }

  toggleEdit(){
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleDelete(){
    this.props.deleteMedication(this.props.id);
  }

  render(){

    const emptyMessage = (
      <tr>
        <td colSpan="6">You have no medications listed</td>
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
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {renderMeds.length === 0 ? emptyMessage : renderMeds}
            </tbody>
          </Table>
        </div>

        {this.state.isEditing ?
          <div className="AttrForm">
            <h3>Edit Medication</h3>
            <p>Medication Form with passed state goes here</p>
            <Button onClick={this.toggleEdit}>Cancel</Button>
          </div>
          :
          <div className="AttrNew">
            <Button onClick={this.toggleCreate}>Add New Medication</Button>
          </div>
        }

        {this.state.toCreate &&
          <div className="AttrForm">
            <h3>Add New Medication</h3>
            <MedicationForm />
            <Button onClick={this.toggleCreate}>Cancel</Button>
          </div>
        }

        <br />
      </div>
    )
  }
}

const mapStatesToProps = (state) => {
  return ({
    medication: state.medication
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteMedication: deleteMedication
  }, dispatch);
};

export default connect(mapStatesToProps, mapDispatchToProps)(Medications);
