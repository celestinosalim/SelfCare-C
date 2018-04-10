import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProviders } from '../../actions/providerActions';
import Providers from '../../components/users/Providers';

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
        <div className="AttrList">
          {this.props.providers.map(provider =>
            <Providers key={provider.id} provider={provider}/>
          )}
        </div>
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
