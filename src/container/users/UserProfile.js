import React from 'react';
import {Image, Grid, Col, Button} from 'react-bootstrap';

import UserDetails from './UserDetails'
import UserMeds from './UserMeds'
import UserInsurance from './UserInsurance'
import UserProviders from './UserProviders'

const UserProfile = () => {
  return(
    <div className="bodyContainer">
      <Grid>
        <Col md={4}>
          <div className="ProfileImage">
            <Image src="/thumbnail.png" thumbnail />
            <Button bsStyle="link">Add Image</Button> | <Button bsStyle="link">Change Image</Button>
            <p>Add an image that gives you joy</p>
          </div>
        </Col>
        <Col md={8}>
          <UserDetails />
          <UserMeds />
          <UserInsurance />
          <UserProviders />
        </Col>
      </Grid>
    </div>
  );
}

export default UserProfile;
