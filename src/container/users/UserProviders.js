import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Providers from './Providers';

class UserProviders extends Component {

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

export default UserProviders;



//
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getProviders } from '../../actions/providerActions';
// import Providers from './Providers';
//
// class UserProviders extends Component {
//   componentDidMount() {
//     this.props.getProviders()
//   }
//
//   render(){
//     return (
//       <div className="UserProviders">
//         <div className="AttrTitle">
//           <h3>Providers</h3>
//         </div>
//         <Providers providers={this.props.providers}/>
//       </div>
//     );
//   }
// }
//
// const mapStatesToProps = (state) => {
//   return ({
//     providers: state.providers
//   });
// };
//
// export default connect(mapStatesToProps, { getProviders })(UserProviders);
