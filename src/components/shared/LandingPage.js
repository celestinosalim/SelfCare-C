import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default () => {
  return (
    <Jumbotron>
      <h1>Self-Care Tracker</h1>
      <p>
        Manage your <strong>Mental Health and Emotions</strong> from your daily habits.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}
