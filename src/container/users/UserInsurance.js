import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import Insurances from './Insurances';
import InsuranceForm from '../../container/forms/InsuranceForm'

class UserInsurance extends Component {

  render(){
    return (
      <div className="UserInsurances">
        <div className="AttrTitle">
          <h3>Insurance</h3>
        </div>
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
              <Insurances
                insurances={this.props.insurances}
                editIns={this.props.editIns} deleteIns={this.props.deleteIns}/>
            </Table>
          </div>

          {!this.props.isEditMed && this.props.isEditIns && !this.props.isEditProv  ?
            <div className="InsForm">
              <h3>Edit {this.props.selectedIns.name}</h3>
              <InsuranceForm insurance={this.props.selectedIns}/>
              <Button bsStyle="link" onClick={this.props.editIns}>Cancel</Button>
            </div>
            :
            <div className="AttrNew">
              <Button bsStyle="primary" onClick={this.props.addIns}>Add New Insurance</Button>
            </div>
          }

          {this.props.isAddIns &&
            <div className="AttrForm">
              <h3>Add New Insurance</h3>
              <InsuranceForm />
              <Button bsStyle="link" onClick={this.props.addIns}>Cancel</Button>
            </div>
          }

          <br />
        </div>
      </div>
    )
  }
};

export default UserInsurance;
