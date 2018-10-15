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
      <main>
        <div className="app-details">
          <h1 className="page-title">Change the relationship you have with yourself for the better.</h1>
          <p>SelfCare is a simple and organized way for you to learn more about your mental health. Share with partners, friends, family, and medical providers to reshape society's view about mental health.</p>
          <p>Tracks daily habits from sleep quality to moods in search of patterns to help determine possible trigger points and mood changes. Setting a daily routine and creating a pattern of behaviors can help improve symptoms in hopes for a brighter future.</p>
          <p>Below are some of the habits and routines we include for tracking.</p>
          <Behaviors behaviors={this.props.behaviors} />
        </div>
      </main>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    behaviors: state.behaviors
  }
}

export default connect(mapStateToProps, { getBehaviors })(About);
