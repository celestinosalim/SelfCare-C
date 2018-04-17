import React, { Component } from 'react';
import {Image, Grid, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMedications } from '../../actions/medicationActions';
import { getInsurances } from '../../actions/insuranceActions';
import { getProviders } from '../../actions/providerActions';

import UserDetails from './UserDetails'
import UserMeds from './UserMeds'
import UserInsurance from './UserInsurance'
import UserProviders from './UserProviders'

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      toCreate: false,
      isEditing: false,
      medication: this.props.medication,
      insurance: this.props.insurance,
      provider: this.props.provider,
    }
    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleCreate(){
    this.setState({
      toCreate: !this.state.toCreate,
    })
  }

  toggleEdit = (medication, insurance, provider) => {
    this.setState({
      isEditing: !this.state.isEditing,
      medication: medication,
      insurance: insurance,
      provider: provider,
    })
  }

  handleDelete = (medication, insurance, provider) => {
    this.props.deleteMedication(medication.id);
  }

  componentDidMount() {
    this.props.getMedications()
    this.props.getInsurances()
    this.props.getProviders()
  }

  render() {
    return(
      <div className="bodyContainer">
        <Grid>
          <Col md={4}>
            <div className="ProfileImage">
              <Image src="/thumbnail.png" thumbnail />
              <Button bsStyle="link">Add Image</Button> | <Button bsStyle="link">Change Image</Button>
              <p>Add an image that gives you joy</p>
            </div>
          </Col>
          <Col md={8}>
            <UserDetails />
            <UserMeds
              medications={this.props.medications} addMedication={this.toggleCreate} editMedication={this.toggleEdit}
              deleteMedication={this.handleDelete}/>
            <UserInsurance
              insurances={this.props.insurances}
              addInsurance={this.toggleCreate} editInsurance={this.toggleEdit}
              deleteInsurance={this.handleDelete}/>
            <UserProviders
              providers={this.props.providers}
              addProvider={this.toggleCreate} editProvider={this.toggleEdit}
              deleteProvider={this.handleDelete}/>
          </Col>
        </Grid>
      </div>
    );
  }
}


const mapStatesToProps = (state) => {
  return ({
    medications: state.medications,
    insurances: state.insurances,
    providers: state.providers
  });
};

export default connect(mapStatesToProps, { getMedications, getInsurances, getProviders })(UserProfile);
