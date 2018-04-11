import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProviders } from '../../actions/providerActions';
import Providers from '../../components/users/Providers';
import AddProvider from '../addProvider';

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
          <Providers providers={this.props.providers}/>
        </div>
        <AddProvider />
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
