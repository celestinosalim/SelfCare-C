import React from 'react';
import {Image, Grid, Col, Button} from 'react-bootstrap';

import UserDetails from '../../container/users/UserDetails'
import UserMeds from '../../container/users/UserMeds'
import UserInsurance from '../../container/users/UserInsurance'
import UserProviders from '../../container/users/UserProviders'

const UserProfile = () => {
  return(
    <Grid>
      <Col md={4}>
        <Image src="/thumbnail.png" thumbnail />
        <Button bsStyle="link">Add Image</Button> | <Button bsStyle="link">Change Image</Button>
        <p>Add an image that gives you joy</p>
      </Col>
      <Col md={8}>
        <UserDetails />
        <UserMeds />
        <UserInsurance />
        <UserProviders />
      </Col>
    </Grid>
  );
}

export default UserProfile;
