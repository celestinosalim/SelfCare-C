import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMedication, enterMedicationFormData } from '../../actions/medicationActions';
import MedicationForm from '../../container/forms/MedicationForm'

class Medications extends Component {
  constructor(props){
    super(props);
    this.state = {
      toCreate: false,
      isEditing: false,
      editing: null,
      medication: this.props.medication,
    }
    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleCreate(){
    this.setState({
      toCreate: !this.state.toCreate,
    })
  }

  toggleEdit = (medication) => {
    debugger
    this.setState({
      isEditing: !this.state.isEditing,
      editing: medication.id,
      medication: medication,

    })
  }

  handleDelete = (medication) => {
    this.props.deleteMedication(medication.id);
  }

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
        <td><Button bsStyle="link" onClick={() => this.toggleEdit(medication)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => this.handleDelete(medication)}>Delete</Button></td>
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
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {medicationList.length === 0 ? emptyMessage : medicationList}
            </tbody>
          </Table>
        </div>

        {this.state.isEditing ?
          <div className="AttrForm">
            <h3>Edit {this.state.medication.name}</h3>
            <MedicationForm medication={this.state.medication}/>
            <Button bsStyle="link" onClick={this.toggleEdit}>Cancel</Button>
          </div>
          :
          <div className="AttrNew">
            <Button bsStyle="primary" onClick={this.toggleCreate}>Add New Medication</Button>
          </div>
        }

        {this.state.toCreate &&
          <div className="AttrForm">
            <h3>Add New Medication</h3>
            <MedicationForm />
            <Button bsStyle="link" onClick={this.toggleCreate}>Cancel</Button>
          </div>
        }

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
    enterMedicationFormData: enterMedicationFormData,
    deleteMedication: deleteMedication
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Medications);
