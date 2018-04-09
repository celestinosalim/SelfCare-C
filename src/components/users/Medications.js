import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import AddMedication from '../../container/addMedication'

const Medications = ({user}) =>  {
  return (
    <div className="UserMedications">
      <div className="AttrTitle">
        <h3>Medication</h3>
      </div>
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
        {user.medications.map(medication =>
          <tr className='AttrInfo' key={medication.id}>
            <td>{medication.name}</td>
            <td>{medication.dose}</td>
            <td>{medication.prescribed}</td>
            <td>{medication.notes}</td>
            <td><Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button></td>
          </tr>
        )}
        <tr><AddMedication /></tr>
        </tbody>
      </Table>
    </div>
  )
};

function mapStatesToProps({ medications }) {
  return { medications }
}

export default connect(mapStatesToProps)(Medications);
