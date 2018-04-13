import React from 'react';
import { Table } from 'react-bootstrap';

import EditInsurance from '../../container/editInsurance'

const Insurances = ({insurances}) => {

  const emptyMessage = (
    <tr>
      <td colSpan="6">There are no insurances in your list</td>
    </tr>
  )

  const renderInsurances = insurances.map(insurance =>
    <tr className='AttrInfo' key={insurance.id}>
      <td>{insurance.name}</td>
      <td>{insurance.address}</td>
      <td>{insurance.phone}</td>
      <td>{insurance.notes}</td>
      <EditInsurance insurance={insurance} id={insurance.id} />
    </tr>
  )

  return (
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
  )
};

export default Insurances;
