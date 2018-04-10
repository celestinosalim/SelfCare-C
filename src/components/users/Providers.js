import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';

const Providers = ({provider}) => {

  return (
    <Tabs
      // activeKey={this.state.key}
      // onSelect={this.handleSelect}
      id="controlled-tab-example"
    >
      <Tab eventKey={1} title="doctor.category" key={provider.id}>
        <div className="DeptTitle">
          <h4>provider.department</h4>
          <h4>{provider.department}</h4>
        </div>
        <div className='DeptInfo'>
          <p>{provider.name}</p>
          <p>Address: {provider.address}</p>
          <p>Phone: {provider.phone}</p>
          <p>Date of First Visit: {provider.first_visit}</p>
          <p>Notes: {provider.notes}</p>
          <Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Providers;
