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
      toCreate: false,
      isEditing: false,
      editing: null,
      insurance: this.props.insurance,
    }
    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleCreate(){
    this.setState({
      toCreate: !this.state.toCreate,
    })
  }

  toggleEdit = (insurance) => {
    this.setState({
      isEditing: !this.state.isEditing,
      insurance: insurance,
    })
  }

  handleDelete = (insurance) => {
    this.props.deleteInsurance(insurance.id);
  }

  render() {
    const emptyMessage = (
      <tr>
        <td colSpan="7">There are no insurances in your list</td>
      </tr>
    )

    const insuranceList = this.props.insurances.map(insurance =>
      <tr className='AttrInfo' key={insurance.id}>
        <td>{insurance.name}</td>
        <td>{insurance.address}</td>
        <td>{insurance.phone}</td>
        <td>{insurance.notes}</td>
        <td><Button bsStyle="link" onClick={() => this.toggleEdit(insurance)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => this.handleDelete(insurance)}>Delete</Button></td>
      </tr>
    )

    return (
      <div className="AttrIndex">
        <div className="AttrTable">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Insurance Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {insuranceList.length === 0 ? emptyMessage : insuranceList}
            </tbody>
          </Table>

          {this.state.isEditing ?
            <div className="AttrForm">
              <h3>Edit {this.state.insurance.name}</h3>
              <InsuranceForm medication={this.state.insurance}/>
              <Button bsStyle="link" onClick={this.toggleEdit}>Cancel</Button>
            </div>
            :
            <div className="AttrNew">
              <Button bsStyle="primary" onClick={this.toggleCreate}>Add New Insurance</Button>
            </div>
          }

          {this.state.toCreate &&
            <div className="AttrForm">
              <h3>Add New Insurance</h3>
              <InsuranceForm />
              <Button bsStyle="link" onClick={this.toggleCreate}>Cancel</Button>
            </div>
          }

          <br />
        </div>
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
