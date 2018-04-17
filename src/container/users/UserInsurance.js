import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import Insurances from './Insurances';
import InsuranceForm from '../../container/forms/InsuranceForm'

class UserInsurance extends Component {

  render(){
    return (
      <div className="UserInsurances">
        <div className="AttrTitle">
          <h3>Insurance</h3>
        </div>
        <div className="AttrIndex">
          <div className="AttrTable">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Insurance Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Notes</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <Insurances
                insurances={this.props.insurances}
                editIns={this.props.editIns} deleteIns={this.props.deleteIns}/>
            </Table>
          </div>



            <br />
        </div>
      </div>
    )
  }
};

export default UserInsurance;



// {this.props.editIns ?
//   <div className="AttrForm">
//     <h3>Edit {this.state.insurance.name}</h3>
//     <InsuranceForm insurance={this.state.insurance}/>
//     <Button bsStyle="link" onClick={this.props.editIns}>Cancel</Button>
//   </div>
//   :
//   <div className="AttrNew">
//     <Button bsStyle="primary" onClick={this.props.addIns}>Add New Insurance</Button>
//   </div>
// }
//
// {this.props.addMed &&
//   <div className="AttrForm">
//     <h3>Add New Insurance</h3>
//     <InsuranceForm />
//     <Button bsStyle="link" onClick={this.props.addIns}>Cancel</Button>
//   </div>
// }


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
