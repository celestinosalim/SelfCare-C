import React, { Component } from 'react';
import { API_URL } from '../actions/apiUrl'
import Behaviors from '../components/users/behaviors/Behaviors';

class About extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      behaviors: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/behaviors`)
     .then(res => res.json())
     .then(behaviors => this.setState({ behaviors }))
  }

  render() {
    return (
      <div className="bodyContainer">
        <div className="App">
          <h1 className="App-title">About Self-Care</h1>
          <p className="App-intro">Self-Care tracks daily habits that can help manage symptoms for those affect by Mental Health. Tracking these daily routines and habits can help inform the user on possible trigger points and mood changes. Setting a daily routine and creating a pattern of behaviors can help improve symptoms in hopes for a brighter future. Below are some of the habits and routines we include for tracking.</p>
        </div>
        <Behaviors behaviors={this.state.behaviors} />
      </div>
    )
  }
};

export default About;
