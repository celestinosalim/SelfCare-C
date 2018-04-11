import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import AddNewObjBtn from '../components/common/addNewObjBtn'

import InsuranceForm from './forms/InsuranceForm';

class AddInsurance extends Component {
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

  render() {
    return (
      <div className="AttrNew">
        <Button onClick={this.toggleHidden.bind(this)}>Add New Insurance</Button>
        {!this.state.isHidden && <InsuranceForm />}
      </div>
    )
  }
}

export default AddInsurance
