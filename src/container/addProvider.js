import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import AddNewObjBtn from '../components/common/addNewObjBtn'

import ProvidersForm from './forms/ProvidersForm';

class AddProvider extends Component {
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
        <Button onClick={this.toggleHidden.bind(this)}>Add New Provider</Button>
        {!this.state.isHidden && <ProvidersForm />}
      </div>
    )
  }
}

export default AddProvider
