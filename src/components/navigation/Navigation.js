import React, { Component } from 'react';
import GuestsNav from './GuestsNav';
import UsersNav from './UsersNav'

class NavigationBar extends Component {
  render() {
    // const { isAuthenticated } = this.props.auth;
    //
    // const userLinks = (
    //   <UsersNav />
    // )
    //
    // const guestLinks = (
    //   <GuestsNav/>
    // )

    return (
      // <div className="App-header">
      //   {isAuthenticated ? userLinks : guestLinks}
      // </div>
      <div><GuestsNav/></div>
    )
  }
}

// function mapStateToProps(state){
//   return {
//     auth: state.auth
//   }
// }

// export default connect(mapStateToProps, {logout})(NavigationBar);

export default NavigationBar
