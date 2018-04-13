import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteInsurance } from '../../actions/insuranceActions';

import InsuranceForm from '../../container/forms/InsuranceForm'

class Insurances extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  toggleEdit(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleDelete(){
    this.props.deleteInsurance(this.props.id);
  }

  render() {
    const emptyMessage = (
      <tr>
        <td colSpan="6">There are no insurances in your list</td>
      </tr>
    )

    const renderInsurances = this.props.insurances.map(insurance =>
      <tr className='AttrInfo' key={insurance.id}>
        <td>{insurance.name}</td>
        <td>{insurance.address}</td>
        <td>{insurance.phone}</td>
        <td>{insurance.notes}</td>
        <td><Button bsStyle="link" onClick={this.toggleEdit}>Edit</Button> | <Button bsStyle="link" onClick={this.handleDelete}>Delete</Button></td>
      </tr>
    )

    return (
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
            {renderInsurances.length === 0 ? emptyMessage : renderInsurances}
          </tbody>
        </Table>
          {!this.state.isHidden && <InsuranceForm />}
        <br />
      </div>
    )
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Insurances);
