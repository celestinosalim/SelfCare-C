import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';

import Insurances from '../../components/users/Insurances';

class UserInsurance extends Component {
  render(){
    return (
      <div className="UserInsurances">
        <div className="AttrTitle">
          <h3>Insurance</h3>
        </div>

      </div>
    )
  }
};

export default UserInsurance;

// <InsuranceForm />
//
// {this.props.insurances.map(insurance =>
//   <Insurances key={insurance.id} insurance={insurance}/>
// )}
