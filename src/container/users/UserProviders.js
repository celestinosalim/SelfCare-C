import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getProviders } from '../../actions/providerActions';
import Providers from './Providers';
import ProviderForm from '../../container/forms/ProviderForm';

class UserProviders extends Component {
  componentDidMount() {
    this.props.getProviders()
  }

  render(){
    return (
      <div className="UserProviders">
        <div className="AttrTitle">
          <h3>Providers</h3>
        </div>
        <Providers providers={this.props.providers}/>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return ({
    providers: state.providers
  });
};

export default connect(mapStatesToProps, { getProviders })(UserProviders);
