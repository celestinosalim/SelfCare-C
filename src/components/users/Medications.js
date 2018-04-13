import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import EditMedication from '../../container/editMedication'

const Medications = ({medications}) =>  {

  const emptyMessage = (
    <tr>
      <td colSpan="6">There are no medications in your list</td>
    </tr>
  )

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
        {renderMeds.length === 0 ? emptyMessage : renderMeds}
      </tbody>
    </Table>
  )
}

export default Medications;
