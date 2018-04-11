import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Providers = ({providers}) => {

  const renderProviders = providers.map(provider =>
    <tr className='AttrInfo' key={provider.id}>
      <td>{provider.name}</td>
      <td>{provider.address}</td>
      <td>{provider.phone}</td>
      {provider.departments.map(department =>
        <td>{department.name}</td>
      )}
      <td>{provider.first_visit}</td>
      <td>{provider.notes}</td>
      <td><Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button></td>
    </tr>
  )

  return (
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
        {renderProviders}
      </tbody>
    </Table>
  );
}

export default Providers;
