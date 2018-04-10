import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMedications } from '../../actions/medicationActions';

import Medications from '../../components/users/Medications';
import MedicationForm from '../MedicationForm';

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

        <MedicationForm />
      </div>
    )
  }
};

const mapStatesToProps = (state) => {
  return ({
    medications: state.medications
  })
}

export default connect(mapStatesToProps, { getMedications })(UserMeds);
//
// {this.props.medications.map(medication =>
//   <Medications key={medication.id} medication={medication}/>
// )}
