import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import Providers from './Providers';
import ProviderForm from '../../container/forms/ProviderForm';

class UserProviders extends Component {

  render(){
    return (
      <div className="UserProviders">
        <div className="AttrTitle">
          <h3>Providers</h3>
        </div>
        <div className="AttrIndex">
          <div className="AttrTable">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Provider Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>First Visit</th>
                  <th>Notes</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <Providers
                providers={this.props.providers}
                editProv={this.props.editProv} deleteProv={this.props.deleteProv}/>
            </Table>
          </div>

          {!this.props.isEditMed && !this.props.isEditIns && this.props.isEditProv ?
            <div className="ProvForm">
              <h3>Edit {this.props.selectedProv.name}</h3>
              <ProviderForm provider={this.props.selectedProv}/>
              <Button bsStyle="link" onClick={this.props.editProv}>Cancel</Button>
            </div>
            :
            <div className="AttrNew">
              <Button bsStyle="primary" onClick={this.props.addProv}>Add New Provider</Button>
            </div>
          }

          {this.props.isAddProv &&
            <div className="AttrForm">
              <h3>Add New Provider</h3>
              <ProviderForm />
              <Button bsStyle="link" onClick={this.props.addProv}>Cancel</Button>
            </div>
          }

          <br />
        </div>
      </div>
    );
  }
}

export default UserProviders;
