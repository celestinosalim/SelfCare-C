import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteProvider } from '../../actions/providerActions';

import ProviderForm from '../../container/forms/ProviderForm';

class Providers extends Component{
  constructor(props){
    super(props);
    this.state = {
      toCreate: false,
      isEditing: false,
      providers: this.props.provider,
    }
    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleCreate(){
    this.setState({
      toCreate: !this.state.toCreate,
    })
  }

  toggleEdit = (provider) => {
    this.setState({
      isEditing: !this.state.isEditing,
      provider: provider,
    })
  }

  handleDelete = (provider) => {
    this.props.deleteProvider(provider.id);
  }

  render() {
    const emptyMessage = (
      <tr>
        <td colSpan="7">There are no providers in your list</td>
      </tr>
    )

    const providerList = this.props.providers.map(provider =>
      <tr className='AttrInfo' key={provider.id}>
        <td>{provider.name}</td>
        <td>{provider.address}</td>
        <td>{provider.phone}</td>
        {provider.departments.map(department =>
          <td key={department.id}>{department.name}</td>
        )}
        <td>Specialty</td>
        <td>{provider.first_visit}</td>
        <td>{provider.notes}</td>
        <td><Button bsStyle="link" onClick={() => this.toggleEdit(provider)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => this.handleDelete(provider)}>Delete</Button></td>
      </tr>
    )

    return (
      <div className="AttrIndex">
        <div className="AttrTable">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Provider Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Speciality</th>
                <th>First Visit</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {providerList.length === 0 ? emptyMessage : providerList}
            </tbody>
          </Table>
        </div>

        {this.state.isEditing ?
          <div className="AttrForm">
            <h3>Edit {this.state.provider.name}</h3>
            <ProviderForm medication={this.state.provider}/>
            <Button bsStyle="link" onClick={this.toggleEdit}>Cancel</Button>
          </div>
          :
          <div className="AttrNew">
            <Button bsStyle="primary" onClick={this.toggleCreate}>Add New Provider</Button>
          </div>
        }

        {this.state.toCreate &&
          <div className="AttrForm">
            <h3>Add New Provider</h3>
            <ProviderForm />
            <Button bsStyle="link" onClick={this.toggleCreate}>Cancel</Button>
          </div>
        }
        <br />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Providers);
