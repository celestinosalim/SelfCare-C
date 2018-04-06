import React from 'react';
import {Button} from 'react-bootstrap';

const Insurances = ({user}) => {
  return (
    <div className="UserInsurances">
      <div className="AttrTitle">
        <h3>Insurance</h3>
      </div>
      <div className="AttrNew">
        <Button>Add Insurance</Button>
      </div>
      {user.insurances.map(insure =>
        <div className='AttrInfo'>
          <h4>Insurance Name: {insure.name}</h4>
          <p>Address: {insure.address}</p>
          <p>Phone: {insure.phone}</p>
          <p>Notes: {insure.notes}</p>
          <Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button>
        </div>
      )}
    </div>
  )
};

export default Insurances;
