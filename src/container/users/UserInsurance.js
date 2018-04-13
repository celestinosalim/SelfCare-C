import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getInsurances } from '../../actions/insuranceActions';
import Insurances from '../../components/users/Insurances';
import InsuranceForm from '../../container/forms/InsuranceForm';

class UserInsurance extends Component {
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
    this.props.getInsurances()
  }

  render(){
    const AddNewObjBtn = (
      <div className="AttrNew">
        <Button onClick={this.toggleHidden.bind(this)}>Add New Insurance</Button>
        {!this.state.isHidden && <InsuranceForm />}
      </div>
    )

    return (
      <div className="UserInsurances">
        <div className="AttrTitle">
          <h3>Insurance</h3>
        </div>
        <div className="AttrList">
          <Insurances insurances={this.props.insurances}/>
        </div>
        {AddNewObjBtn}
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
