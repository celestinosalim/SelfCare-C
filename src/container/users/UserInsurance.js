import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getInsurances } from '../../actions/insuranceActions';
import Insurances from './Insurances';
import InsuranceForm from '../../container/forms/InsuranceForm';

class UserInsurance extends Component {
  componentDidMount() {
    this.props.getInsurances()
  }

  render(){
    return (
      <div className="UserInsurances">
        <div className="AttrTitle">
          <h3>Insurance</h3>
        </div>
        <Insurances insurances={this.props.insurances}/>
      </div>
    )
  }
};

const mapStatesToProps = (state) => {
  return ({
    insurances: state.insurances
  });
};

export default connect(mapStatesToProps, { getInsurances })(UserInsurance);
