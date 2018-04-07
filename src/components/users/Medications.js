import React from 'react';
import {Button} from 'react-bootstrap';
import AddMedication from '../../container/addAttrButtons'

const Medications = ({user}) => {

  return (
    <div className="UserMedications">
      <div className="AttrTitle">
        <h3>Medication</h3>
      </div>
      <div className="AttrNew">
        <AddMedication />
      </div>
      {user.medications.map(meds =>
        <div className='AttrInfo' key={meds.id}>
          <h4>Medication Name: {meds.name}</h4>
          <p>Dosage: {meds.dose}</p>
          <p>Prescribed By: {meds.prescribed}</p>
          <p>Notes: {meds.notes}</p>
          <Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button>
        </div>
      )}
    </div>
  )
};

export default Medications;
