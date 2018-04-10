import React from 'react';
import { Button } from 'react-bootstrap';

const Insurances = ({insurance}) => {

  return (
    <tr className='AttrInfo' key={insurance.id}>
      <td>{insurance.name}</td>
      <td>{insurance.address}</td>
      <td>{insurance.phone}</td>
      <td>{insurance.notes}</td>
      <td><Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button></td>
    </tr>
  )
};

export default Insurances;
