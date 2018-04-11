import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Insurances = ({insurances}) => {

  const renderInsurances = insurances.map(insurance =>
    <tr className='AttrInfo' key={insurance.id}>
      <td>{insurance.name}</td>
      <td>{insurance.address}</td>
      <td>{insurance.phone}</td>
      <td>{insurance.notes}</td>
      <td><Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button></td>
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
        {renderInsurances}
      </tbody>
    </Table>
  )
};

export default Insurances;
