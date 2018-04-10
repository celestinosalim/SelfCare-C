import React from 'react';
import { Button } from 'react-bootstrap';

const Insurances = ({insurances}) => {

  const renderInsurances = insurances.map(insurance =>
    <div className='AttrInfo' key={insurance.id}>
      <h4>Insurance Name: {insurance.name}</h4>
      <p>Address: {insurance.address}</p>
      <p>Phone: {insurance.phone}</p>
      <p>Notes: {insurance.notes}</p>
      <Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button>
    </div>
  )

  return (
    <div className="AttrList">
      {renderInsurances}
    </div>
  )
};

export default Insurances;
