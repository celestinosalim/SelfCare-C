import React from 'react';
import { Button } from 'react-bootstrap';

const Medications = ({medication}) =>  {

  return (
    <tr className='AttrInfo' key={medication.id}>
      <td>{medication.name}</td>
      <td>{medication.dose}</td>
      <td>{medication.prescribed}</td>
      <td>{medication.notes}</td>
      <td><Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button></td>
    </tr>
  )
}

export default Medications;
