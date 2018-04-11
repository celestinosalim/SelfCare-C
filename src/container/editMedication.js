import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import AddNewObjBtn from '../components/common/addNewObjBtn'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMedication } from '../actions/medicationActions';

// import MedicationForm from './forms/MedicationForm';

class EditMedication extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleEdit(){
    console.log("hello")

  }

  handleDelete(){
    this.props.deleteMedication(this.props.id);
  }

  render() {
    return (
      <td><Button bsStyle="link" onClick={this.handleEdit}>Edit</Button> | <Button bsStyle="link" onClick={this.handleDelete}>Delete</Button></td>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    medication: state.medication
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteMedication: deleteMedication
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMedication);
