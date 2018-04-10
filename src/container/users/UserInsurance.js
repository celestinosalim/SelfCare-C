import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';
import { getInsurances } from '../../actions/insuranceActions';

import Insurances from '../../components/users/Insurances';
import InsuranceForm from '../forms/InsuranceForm';

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
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Insurance Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Notes</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.props.insurances.map(insurance =>
              <Insurances key={insurance.id} insurance={insurance}/>
            )}
            </tbody>
          </Table>
          <InsuranceForm />
        </div>
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
