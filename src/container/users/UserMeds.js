import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import Medications from './Medications';
import MedicationForm from '../../container/forms/MedicationForm'

class UserMeds extends Component {

  render(){
    return (
      <div className="UserMedications">
        <div className="AttrTitle">
          <h3>Medication</h3>
        </div>
        <div className="AttrIndex">
          <div className="AttrTable">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Medication Name</th>
                  <th>Dose</th>
                  <th>Date of First Dose</th>
                  <th>Prescribed By</th>
                  <th>Notes</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <Medications
                medications={this.props.medications}
                editMedication={this.toggleEdit} deleteMedication={this.handleDelete}/>
            </Table>
          </div>



          <br />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return ({
    medication: state.medication
  });
};

export default connect(mapStateToProps)(UserMeds);

// {this.props.editMedication ?
//   <div className="AttrForm">
//     <h3>Edit {this.props.medication.name}</h3>
//     <MedicationForm medication={this.state.medication}/>
//     <Button bsStyle="link" onClick={this.props.editMedication}>Cancel</Button>
//   </div>
//   :
//   <div className="AttrNew">
//     <Button bsStyle="primary" onClick={this.toggleCreate}>Add New Medication</Button>
//   </div>
// }
//
// {this.props.addMedication &&
//   <div className="AttrForm">
//     <h3>Add New Medication</h3>
//     <MedicationForm />
//     <Button bsStyle="link" onClick={this.props.addMedication}>Cancel</Button>
//   </div>
// }



//
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getMedications } from '../../actions/medicationActions';
// import Medications from './Medications';
//
// class UserMeds extends Component {
//   componentDidMount() {
//     this.props.getMedications()
//   }
//
//   render(){
//     return (
//       <div className="UserMedications">
//         <div className="AttrTitle">
//           <h3>Medication</h3>
//         </div>
//         <Medications medications={this.props.medications}/>
//       </div>
//     )
//   }
// };
//
// const mapStateToProps = (state) => {
//   return ({
//     medications: state.medications
//   });
// };
//
// export default connect(mapStateToProps, { getMedications })(UserMeds);
