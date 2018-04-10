import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';
import { getMedications } from '../../actions/medicationActions';

import Medications from '../../components/users/Medications';
import MedicationForm from '../forms/MedicationForm';

class UserMeds extends Component {
  componentDidMount() {
    this.props.getMedications()
  }

  render(){
    return (
      <div className="UserMedications">
        <div className="AttrTitle">
          <h3>Medication</h3>
        </div>
        <div className="AttrList">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Medication Name</th>
                <th>Dose</th>
                <th>Prescribed By</th>
                <th>Notes</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.props.medications.map(medication =>
              <Medications key={medication.id} medication={medication}/>
            )}
            </tbody>
          </Table>
        </div>
        <MedicationForm />
      </div>
    )
  }
};

const mapStatesToProps = (state) => {
  return ({
    medications: state.medications
  });
};

export default connect(mapStatesToProps, { getMedications })(UserMeds);
