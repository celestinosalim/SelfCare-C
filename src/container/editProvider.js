import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import AddNewObjBtn from '../components/common/addNewObjBtn'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteProvider } from '../actions/providerActions';

// import MedicationForm from './forms/MedicationForm';

class EditProvider extends Component {
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
    this.props.deleteProvider(this.props.id);
  }

  render() {
    return (
      <td><Button bsStyle="link" onClick={this.handleEdit}>Edit</Button> | <Button bsStyle="link" onClick={this.handleDelete}>Delete</Button></td>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    provider: state.provider
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteProvider: deleteProvider
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProvider);
