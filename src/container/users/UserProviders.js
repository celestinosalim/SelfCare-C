import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getProviders } from '../../actions/providerActions';
import Providers from '../../components/users/Providers';
import ProviderForm from '../../container/forms/ProviderForm';

class UserProviders extends Component {
  constructor(){
    super();
    this.state = {
      isHidden: true
    }
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    this.props.getProviders()
  }

  render(){
    const AddNewObjBtn = (
      <div className="AttrNew">
        <Button onClick={this.toggleHidden.bind(this)}>Add New Provider</Button>
        {!this.state.isHidden && <ProviderForm />}
      </div>
    )

    return (
      <div className="UserProviders">
        <div className="AttrTitle">
          <h3>Providers</h3>
        </div>
        <div className="AttrList">
          <Providers providers={this.props.providers}/>
        </div>
        {AddNewObjBtn}
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
