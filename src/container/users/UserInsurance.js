import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Insurances from './Insurances';

class UserInsurance extends Component {

  render(){
    return (
      <div className="UserInsurances">
        <div className="AttrTitle">
          <h3>Insurance</h3>
        </div>
        <Insurances insurances={this.props.insurances}/>
      </div>
    )
  }
};

export default UserInsurance;


//
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getInsurances } from '../../actions/insuranceActions';
// import Insurances from './Insurances';
//
// class UserInsurance extends Component {
//   componentDidMount() {
//     this.props.getInsurances()
//   }
//
//   render(){
//     return (
//       <div className="UserInsurances">
//         <div className="AttrTitle">
//           <h3>Insurance</h3>
//         </div>
//         <Insurances insurances={this.props.insurances}/>
//       </div>
//     )
//   }
// };
//
// const mapStatesToProps = (state) => {
//   return ({
//     insurances: state.insurances
//   });
// };
//
// export default connect(mapStatesToProps, { getInsurances })(UserInsurance);
