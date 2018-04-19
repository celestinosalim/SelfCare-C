import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Providers extends Component{

  render() {
    const emptyMessage = (
      <tr>
        <td colSpan="8">There are no providers in your list</td>
      </tr>
    )

    const providerList = this.props.providers.map(provider =>
      <tr className='AttrInfo' key={provider.id}>
        <td>{provider.name}</td>
        <td>{provider.address}</td>
        <td>{provider.phone}</td>
        <td>{provider.first_visit}</td>
        <td>{provider.notes}</td>
        <td><Button bsStyle="link" onClick={() => this.props.editProv(provider)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => this.props.deleteProv(provider.id)}>Delete</Button></td>
      </tr>
    )

    return (
      <tbody>
        {providerList.length === 0 ? emptyMessage : providerList}
      </tbody>
    );
  }
}

export default Providers;

// {provider.departments.map(department =>
//   <td key={department.id}>{department.name}</td>
// )}
