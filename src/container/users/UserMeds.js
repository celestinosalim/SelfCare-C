import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { getMedications } from '../../actions/medicationActions';
import Medications from '../../components/users/Medications';
import AddMedication from '../addMedication';

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
          <Medications medications={this.props.medications}/>
        </div>
        <AddMedication />
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
