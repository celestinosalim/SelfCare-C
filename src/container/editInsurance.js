import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import AddNewObjBtn from '../components/common/addNewObjBtn'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteInsurance } from '../actions/insuranceActions';

// import MedicationForm from './forms/MedicationForm';

class EditInsurance extends Component {
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
    this.props.deleteInsurance(this.props.id);
  }

  render() {
    return (
      <td><Button bsStyle="link" onClick={this.handleEdit}>Edit</Button> | <Button bsStyle="link" onClick={this.handleDelete}>Delete</Button></td>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    insurance: state.insurance
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteInsurance: deleteInsurance
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditInsurance);
