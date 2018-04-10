import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_URL } from '../actions/apiUrl';
import { getMedications } from '../actions/medicationActions'

import MedicationList from '../components/MedicationList';
import MedicationForm from './MedicationForm';

class Meds extends Component {
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
  return({
    medications: state.medications
  })
}

export default connect(mapStatesToProps, { getMedications })(Meds);

// {this.props.medications.map(medication =>
//   <MedicationList key={medication.id} medication={medication}/>
// )}
