import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Medications = ({medications}) =>  {

  const renderMedications = medications.map(medication =>
    <tr className='AttrInfo' key={medication.id}>
      <td>{medication.name}</td>
      <td>{medication.dose}</td>
      <td>{medication.prescribed}</td>
      <td>{medication.notes}</td>
      <td><Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button></td>
    </tr>
  )

  return (
    <div className="AttrList">
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Medication Name</th>
            <th>Dose</th>
            <th>Prescribed By</th>
            <th>Notes</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {renderMedications}
        </tbody>
      </Table>
    </div>
  )
}

export default Medications;
