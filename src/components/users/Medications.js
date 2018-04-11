import React from 'react';
import { Table } from 'react-bootstrap';

import EditMedication from '../../container/editMedication'

const Medications = ({medications}) =>  {

  const renderMeds = medications.map(medication =>
    <tr className='AttrInfo' key={medication.id}>
      <td>{medication.name}</td>
      <td>{medication.dose}</td>
      <td>{medication.first_dose}</td>
      <td>{medication.prescribed}</td>
      <td>{medication.notes}</td>
      <EditMedication medication={medication} id={medication.id}/>
    </tr>
  )

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Medication Name</th>
          <th>Dose</th>
          <th>Date of First Dose</th>
          <th>Prescribed By</th>
          <th>Notes</th>
          <th>Edit / Delete</th>
        </tr>
      </thead>
      <tbody>
        {renderMeds}
      </tbody>
    </Table>
  )
}

export default Medications;
      // <td><Button bsStyle="link" onClick={this.props.handleEdit}>Edit</Button> | <Button bsStyle="link" onClick={this.props.handleDelete}>Delete</Button></td>
