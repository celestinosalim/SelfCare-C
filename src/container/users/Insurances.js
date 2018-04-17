import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Insurances extends Component {

  render() {
    const emptyMessage = (
      <tr>
        <td colSpan="7">There are no insurances in your list</td>
      </tr>
    )

    const insuranceList = this.props.insurances.map(insurance =>
        <tr className='AttrInfo' key={insurance.id}>
          <td>{insurance.name}</td>
          <td>{insurance.address}</td>
          <td>{insurance.phone}</td>
          <td>{insurance.notes}</td>
          <td><Button bsStyle="link" onClick={() => this.props.editIns(insurance)}>Edit</Button></td>
          <td><Button bsStyle="link" onClick={() => this.props.deleteIns(insurance.id)}>Delete</Button></td>
        </tr>
    )

    return (
      <tbody>
        {insuranceList.length === 0 ? emptyMessage : insuranceList}
      </tbody>
    )
  }
};

export default Insurances;
