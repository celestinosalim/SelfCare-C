import React, { Component } from 'react';
import { Radio } from 'react-bootstrap';

class Departments extends Component {
  render() {
    debugger;
    return (
      this.props.departments.map((department, index) =>
        <Radio
          key={index}
          value={department.id}
          name={department.name}
          checked={this.props.checked}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          inline>
          {department.name}
        </Radio>
      )
    )
  }
}
export default Departments;
