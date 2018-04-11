import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBehaviors } from '../actions/behaviorActions'
import Behaviors from '../components/users/Behaviors';

class About extends Component  {
  componentDidMount() {
    this.props.getBehaviors()
  }

  render() {
    return (
      <div className="bodyContainer">
        <div className="App">
          <h1 className="App-title">About Self-Care</h1>
          <p className="App-intro">Self-Care tracks daily habits that can help manage symptoms for those affect by Mental Health. Tracking these daily routines and habits can help inform the user on possible trigger points and mood changes. Setting a daily routine and creating a pattern of behaviors can help improve symptoms in hopes for a brighter future. Below are some of the habits and routines we include for tracking.</p>
        </div>
        <Behaviors behaviors={this.props.behaviors} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    behaviors: state.behaviors
  }
}

export default connect(mapStateToProps, { getBehaviors })(About);
