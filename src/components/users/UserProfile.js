import React, {Component} from 'react';
import {Image, Grid, Col, Button} from 'react-bootstrap';

import UserAttr from './UserAttr';

class UserProfile extends Component {

  render() {
    return(
      <Grid>
        <Col md={4}>
          <Image src="/thumbnail.png" thumbnail />
          <Button bsStyle="link">Add Image</Button> | <Button bsStyle="link">Change Image</Button>
          <p>Add an image that gives you joy</p>
        </Col>
        <Col md={8}>
          <UserAttr users={this.state.users}/>
        </Col>
      </Grid>
    );
  };
}

export default UserProfile;
