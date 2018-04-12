import React from 'react';
import { Table } from 'react-bootstrap';

import EditProvider from '../../container/editProvider'

const Providers = ({providers}) => {

  const emptyMessage = (
    <tr>There are no Providers in your list.</tr>
  )

  const renderProviders = providers.map(provider =>
    <tr className='AttrInfo' key={provider.id}>
      <td>{provider.name}</td>
      <td>{provider.address}</td>
      <td>{provider.phone}</td>
      {provider.departments.map(department =>
        <td key={department.id}>{department.name}</td>
      )}
      <td>{provider.first_visit}</td>
      <td>{provider.notes}</td>
      <EditProvider provider={provider} id={provider.id}/>
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
        {renderProviders.length === 0 ? emptyMessage : renderProviders}
      </tbody>
    </Table>
  );
}

export default Providers;
