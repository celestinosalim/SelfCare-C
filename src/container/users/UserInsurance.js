import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInsurances } from '../../actions/insuranceActions';
import Insurances from '../../components/users/Insurances';
import AddInsurance from '../addInsurance'

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
        <div className="AttrList">
          <Insurances insurances={this.props.insurances}/>
        </div>
        <AddInsurance />
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
