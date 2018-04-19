import React, { Component } from 'react';
import {Image, Grid, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { getMedications, deleteMedication } from '../../actions/medicationActions';
import { getInsurances, deleteInsurance } from '../../actions/insuranceActions';
import { getProviders, deleteProvider } from '../../actions/providerActions';

import UserDetails from './UserDetails'
import UserMeds from './UserMeds'
import UserInsurance from './UserInsurance'
import UserProviders from './UserProviders'

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      toCreate: false,
      isEditMed: false,
      isEditIns: false,
      isEditProv: false,
      medication: this.props.medication,
      insurance: this.props.insurance,
      provider: this.props.provider,
    }
  }

  toggleCreate = () => {
    console.log("whoa")
    this.setState({
      toCreate: !this.state.toCreate,
    })
  }

  toggleEditMeds = (medication) => {
    console.log("hi")
    this.setState({
      isEditMed: !this.state.isEditMed,
      isEditIns: this.state.isEditIns,
      isEditProv: this.state.isEditProv,
      medication: medication
    })
  }
  toggleEditIns = (insurance) => {
    console.log("bye")
    this.setState({
      isEditMed: this.state.isEditMed,
      isEditIns: !this.state.isEditIns,
      isEditProv: this.state.isEditProv,
      insurance: insurance
    })
  }

  toggleEditProv = (provider) => {
    console.log("hehe")
    this.setState({
      isEditMed: this.state.isEditMed,
      isEditIns: this.state.isEditIns,
      isEditProv: !this.state.isEditProv,
      provider: provider
    })
  }

  handleDeleteMed = (medication) => {
    this.props.deleteMedication(medication)
  }

  handleDeleteIns = (insurance) => {
    this.props.deleteInsurance(insurance)
  }

  handleDeleteProv = (provider) => {
    this.props.deleteProvider(provider)
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
              medications={this.props.medications}
              addMed={this.toggleCreate}
              editMed={this.toggleEditMeds}

              isEditMed={this.state.isEditMed}
              isEditIns={this.state.isEditIns}
              isEditProv={this.state.isEditProv}

              selectedMed={this.state.medication}
              deleteMed={this.handleDeleteMed}/>

            <UserInsurance
              insurances={this.props.insurances}
              addIns={this.toggleCreate}
              editIns={this.toggleEditIns}

              isEditMed={this.state.isEditMed}
              isEditIns={this.state.isEditIns}
              isEditProv={this.state.isEditProv}

              selectedIns={this.state.insurance}
              deleteIns={this.handleDeleteIns}/>

            <UserProviders
              providers={this.props.providers}
              addProv={this.toggleCreate}
              editProv={this.toggleEditProv}

              isEditMed={this.state.isEditMed}
              isEditIns={this.state.isEditIns}
              isEditProv={this.state.isEditProv}

              selectedProv={this.state.provider}
              deleteProv={this.handleDeleteProv}/>
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
    providers: state.providers,
    medication: state.medication,
    insurance: state.insurance,
    provider: state.provider
  });
};

export default connect(mapStatesToProps, { getMedications, getInsurances, getProviders, deleteMedication, deleteInsurance, deleteProvider })(UserProfile);
