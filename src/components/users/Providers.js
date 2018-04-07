import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';

const Providers = ({user}) => {

  return (
    <div className="UserProviders">
      <div className="AttrTitle">
        <h3>Providers</h3>
      </div>
      <div className="AttrNew">
        <Button>Add a Provider</Button>
      </div>
      <Tabs
        // activeKey={this.state.key}
        // onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
      {user.providers.map(provider =>
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

      )}
      </Tabs>
    </div>
  );
}

export default Providers;

// <Tab eventKey={2} title="Psychiatrist">
//   <div className="DeptTitle">
//     <h4>Psychiatrist</h4>
//   </div>
//   <div className='DeptInfo'>
//     <p>Psychiatrist Name</p>
//     <p>Address: </p>
//     <p>Phone: </p>
//     <p>Date of First Visit: </p>
//     <p>Notes:</p>
//     <Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button>
//   </div>
// </Tab>
// <Tab eventKey={3} title="Therapist">
//   <div className="DeptTitle">
//     <h4>Therapist</h4>
//   </div>
//   <div className='DeptInfo'>
//     <p>Therapist Name</p>
//     <p>Address: </p>
//     <p>Phone: </p>
//     <p>Date of First Visit: </p>
//     <p>Notes:</p>
//     <Button bsStyle="link">Edit</Button> | <Button bsStyle="link">Delete</Button>
//   </div>
// </Tab>
