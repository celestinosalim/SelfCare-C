import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getMedications } from '../../actions/medicationActions';
import Medications from '../../components/users/Medications';
import MedicationForm from '../../container/forms/MedicationForm';

class UserMeds extends Component {
  constructor(){
    super();
    this.state = {
      isHidden: true
    }
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    this.props.getMedications()
  }

  render(){
    const AddNewObjBtn = (
      <div className="AttrNew">
        <Button onClick={this.toggleHidden.bind(this)}>Add New Medication</Button>
        {!this.state.isHidden && <MedicationForm />}
      </div>
    )

    return (
      <div className="UserMedications">
        <div className="AttrTitle">
          <h3>Medication</h3>
        </div>
        <Medications medications={this.props.medications}/>
        {AddNewObjBtn}
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
