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
    this.props.deleteProvider(this.props.id);
  }

  render() {
    const emptyMessage = (
      <tr>
        <td colSpan="6">There are no providers in your list</td>
      </tr>
    )

    const renderProviders = this.props.providers.map(provider =>
      <tr className='AttrInfo' key={provider.id}>
        <td>{provider.name}</td>
        <td>{provider.address}</td>
        <td>{provider.phone}</td>
        {provider.departments.map(department =>
          <td key={department.id}>{department.name}</td>
        )}
        <td>{provider.first_visit}</td>
        <td>{provider.notes}</td>
        <td><Button bsStyle="link" onClick={this.toggleEdit}>Edit</Button> | <Button bsStyle="link" onClick={this.handleDelete}>Delete</Button></td>
      </tr>
    )

    return (
      <div className="AttrList">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Provider Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Speciality</th>
              <th>First Visit</th>
              <th>Notes</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {renderProviders.length === 0 ? emptyMessage : renderProviders}
          </tbody>
        </Table>
          {!this.state.isHidden && <ProviderForm />}
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
