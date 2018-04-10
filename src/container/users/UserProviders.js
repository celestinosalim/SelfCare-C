import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';

import Providers from '../../components/users/Providers';

class UserProviders extends Component {
  render(){
    return (
      <div className="UserProviders">
        <div className="AttrTitle">
          <h3>Providers</h3>
        </div>

      </div>
    );
  }
}

export default UserProviders;
// <Providers />

// {this.props.providers.map(provider =>
//   <Providers key={provider.id} provider={provider}/>
// )}
